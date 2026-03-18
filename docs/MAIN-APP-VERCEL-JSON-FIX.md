# Fix: Add /blog rewrites to main everwhen app

The main `everwhen` app (served at everwhen.io) has no `/blog` route.
The `everwhen_landing` blog is deployed at `everwhenlanding.vercel.app`.

## Fix: Add rewrites to `vercel.json` in the main everwhen app

Create or update `vercel.json` at the root of the `everwhen` repo:

```json
{
  "rewrites": [
    {
      "source": "/blog",
      "destination": "https://everwhenlanding.vercel.app/blog"
    },
    {
      "source": "/blog/:path*",
      "destination": "https://everwhenlanding.vercel.app/blog/:path*"
    }
  ]
}
```

OR add to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://everwhenlanding.vercel.app/blog',
      },
      {
        source: '/blog/:path*',
        destination: 'https://everwhenlanding.vercel.app/blog/:path*',
      },
    ]
  },
}
```

## Result
- `everwhen.io/blog` → proxies to `everwhenlanding.vercel.app/blog` ✅
- `everwhen.io/blog/7am-phone-call` → proxies to blog post ✅
- URL remains `everwhen.io/blog` (not a redirect) ✅

## Blog deployment
- **Live URL:** https://everwhenlanding.vercel.app/blog
- **Vercel project:** buddy-ps-projects/everwhen_landing
- **GitHub repo:** https://github.com/buddy-pieron/everwhen-landing
