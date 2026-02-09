import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import type { PostMetadata } from '@/lib/posts'

export function PostCard({ post }: { post: PostMetadata }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>{post.readingTime}</span>
          </div>
          <CardTitle className="text-2xl">{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
