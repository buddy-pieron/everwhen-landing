'use client'

import { codeToHtml } from 'shiki'
import { useEffect, useState } from 'react'

interface CodeBlockProps {
  children: string
  className?: string
}

function CodeBlock({ children, className }: CodeBlockProps) {
  const [html, setHtml] = useState('')
  const language = className?.replace('language-', '') || 'text'

  useEffect(() => {
    async function highlight() {
      const highlighted = await codeToHtml(children.trim(), {
        lang: language,
        theme: 'github-dark',
      })
      setHtml(highlighted)
    }
    highlight()
  }, [children, language])

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim())
  }

  return (
    <div className="relative group my-6">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
      >
        Copy
      </button>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return <h2 id={id} className="text-3xl font-bold mt-8 mb-4 scroll-mt-20" {...props} />
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return <h3 id={id} className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20" {...props} />
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 leading-7" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 ml-6 list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 ml-6 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="my-2" {...props} />
  ),
  code: (props: CodeBlockProps) => {
    if (props.className) {
      return <CodeBlock {...props} />
    }
    return (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    )
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-6 overflow-x-auto" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4" {...props} />
  ),
}
