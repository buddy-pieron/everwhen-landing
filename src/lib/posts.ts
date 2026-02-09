import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  content: string
  readingTime: string
}

export interface PostMetadata {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  readingTime: string
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      return getPostBySlug(slug)
    })
    .filter((post): post is Post => post !== null)

  // Sort posts by date (newest first)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const { text: readingTimeText } = readingTime(content)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      author: data.author,
      content,
      readingTime: readingTimeText,
    }
  } catch {
    return null
  }
}

export function getPostMetadata(): PostMetadata[] {
  const posts = getAllPosts()
  return posts.map(({ slug, title, description, date, tags, author, readingTime }) => ({
    slug,
    title,
    description,
    date,
    tags,
    author,
    readingTime,
  }))
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug)

  // Score posts by number of shared tags
  const scoredPosts = allPosts.map((post) => {
    const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag))
    return { post, score: sharedTags.length }
  })

  // Sort by score, then by date
  scoredPosts.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score
    return a.post.date > b.post.date ? -1 : 1
  })

  return scoredPosts.slice(0, limit).map((item) => item.post)
}
