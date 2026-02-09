import { getPostMetadata } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  const posts = getPostMetadata().slice(0, 5)

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Building the Future with Next.js, Convex, and AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Technical insights and tutorials for indie developers who want to ship faster.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blog">
            <Button size="lg">Read the Blog</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">About Me</Button>
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
