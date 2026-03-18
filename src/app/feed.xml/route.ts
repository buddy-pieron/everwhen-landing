import { Feed } from 'feed'
import { getAllPosts } from '@/lib/posts'

export async function GET() {
  const posts = getAllPosts()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.pieronlabs.com'

  const feed = new Feed({
    title: 'EverWhen Blog',
    description: 'Technical insights on Next.js, Convex, and AI tools',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, EverWhen`,
    author: {
      name: 'Jack Pieron',
      email: 'jack@pieronlabs.com',
      link: siteUrl,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.description,
      content: post.content,
      author: [
        {
          name: post.author,
        },
      ],
      date: new Date(post.date),
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}
