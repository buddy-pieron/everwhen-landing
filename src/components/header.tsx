'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Pieron Labs
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">
            Blog
          </Link>
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
            About
          </Link>
          {mounted && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
