import { getPostMetadata, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getPostMetadata()
  const tags = getAllTags()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Filter by tag:</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
