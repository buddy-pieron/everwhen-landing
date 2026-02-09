import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts'
import { generateToc } from '@/lib/toc'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx-components'
import { TableOfContents } from '@/components/table-of-contents'
import { AuthorCard } from '@/components/author-card'
import { PostCard } from '@/components/post-card'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Pieron Labs`,
    description: post.description,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const toc = generateToc(post.content)
  const relatedPosts = getRelatedPosts(slug)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <article className="lg:col-span-8">
            <header className="mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{post.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            <AuthorCard author={post.author} date={post.date} />

            {relatedPosts.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <PostCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="lg:col-span-4">
            <TableOfContents items={toc} />
          </aside>
        </div>
      </div>
    </div>
  )
}
