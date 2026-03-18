'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="https://www.everwhen.io"
          className="flex items-center gap-2 text-xl font-bold text-purple-700 hover:text-purple-800 transition-colors"
        >
          <span className="text-2xl">🛡️</span>
          EverWhen
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="font-medium text-purple-700 hover:text-purple-900 dark:hover:text-purple-400 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="https://www.everwhen.io/#pricing"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="https://www.everwhen.io/waitlist"
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
          >
            Try Free
          </Link>
        </nav>
      </div>
    </header>
  )
}
