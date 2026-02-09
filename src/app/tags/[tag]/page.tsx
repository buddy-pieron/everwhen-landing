import { getPostsByTag, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  return {
    title: `Posts tagged "${tag}" | Pieron Labs`,
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
          ← Back to all posts
        </Link>
        <h1 className="text-4xl font-bold">
          Posts tagged <span className="text-blue-600 dark:text-blue-400">#{tag}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
