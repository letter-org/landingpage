import { updateSession } from "@/lib/supabase/proxy";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Proxy handler pour :
 * 1. Redirection SEO non-www → www (301 permanent)
 * 2. Gestion de session Supabase
 * 
 * Corrige les erreurs "Erreur liée à des redirections" dans Google Search Console
 */
export async function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const { pathname, search } = request.nextUrl

  // SEO: Redirect non-www to www (301 permanent)
  // Construction explicite de l'URL pour éviter les problèmes avec nextUrl.clone()
  // qui peut contenir des URLs internes Vercel dans certains contextes
  if (
    hostname === 'nextletter.ch' ||
    hostname.startsWith('nextletter.ch:')
  ) {
    const redirectUrl = new URL(`https://www.nextletter.ch${pathname}${search}`)
    return NextResponse.redirect(redirectUrl, 301)
  }
  
  // Continue with Supabase session handling
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, favicon.png (favicon files)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * - brand/ folder, images/ folder, videos/ folder
     */
    "/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|brand/|images/|videos/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
