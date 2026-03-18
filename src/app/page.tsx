import { getPostMetadata } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import Link from 'next/link'

export default function Home() {
  const posts = getPostMetadata().slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-6">
          EverWhen Blog
        </span>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Caring for Aging Parents —{' '}
          <span className="text-purple-600">Without the Guilt</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Guides on senior safety, independent living, and how to stay connected
          with your aging parent — without being overbearing.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Read the Blog
          </Link>
          <Link
            href="https://www.everwhen.io"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            About EverWhen →
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
          <Link href="/blog" className="text-purple-600 hover:underline font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="mt-20 bg-purple-50 dark:bg-purple-950/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Try EverWhen?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Daily check-ins, medication reminders, and Wellness Agent calls —
          without cameras or GPS tracking.
        </p>
        <Link
          href="https://www.everwhen.io"
          className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors inline-block"
        >
          Start Your Free 14-Day Trial →
        </Link>
      </section>
    </div>
  )
}
