/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // SEO: Redirect non-www to www (301 permanent redirects)
  // This complements the middleware for edge cases
  async redirects() {
    return [
      // Catch-all redirect from non-www to www
      // Note: These redirects only work for paths, not for domain switching
      // Domain-level redirects are handled by middleware.ts
    ]
  },
  
  // Add security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
