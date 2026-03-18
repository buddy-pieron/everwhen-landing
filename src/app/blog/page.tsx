import { getPostMetadata, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EverWhen Blog | Senior Safety & Caregiver Guides',
  description:
    'Expert guides on senior safety, independent living, and caregiver support. Learn how to check on your aging parent without being overbearing.',
}

export default function BlogPage() {
  const posts = getPostMetadata()
  const tags = getAllTags()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          EverWhen Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Guides on senior safety, independent living, and caring for aging
          parents — without the guilt or the surveillance.
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Browse by topic:
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="px-3 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50 rounded-full text-sm transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
