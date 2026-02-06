import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware to handle SEO redirects:
 * - Redirect non-www to www (301 permanent)
 * - Handles both http and https protocols
 * 
 * Note: HTTP → HTTPS redirect is typically handled by the hosting provider (Vercel)
 */
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()
  
  // Production domain check
  const isProductionDomain = hostname.includes('nextletter.ch')
  
  // Skip if not production domain (local dev, preview deployments, etc.)
  if (!isProductionDomain) {
    return NextResponse.next()
  }
  
  // Redirect non-www to www
  // nextletter.ch → www.nextletter.ch
  if (hostname === 'nextletter.ch') {
    url.host = 'www.nextletter.ch'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  // Match all paths except static files, api routes, and _next
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (/api/*)
     * - static files (/_next/static/*, /favicon.ico, etc.)
     * - public files (/images/*, /videos/*, /brand/*)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.png|images|videos|brand|sitemap.xml|robots.txt).*)',
  ],
}
