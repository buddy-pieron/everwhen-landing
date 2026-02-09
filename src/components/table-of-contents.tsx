'use client'

import type { TocItem } from '@/lib/toc'

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null

  return (
    <nav className="sticky top-20 hidden lg:block">
      <h3 className="text-sm font-semibold mb-4">Table of Contents</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'ml-4' : ''}
          >
            <a
              href={`#${item.id}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
