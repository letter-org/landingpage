import { updateSession } from "@/lib/supabase/proxy";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // SEO: Redirect non-www to www (301 permanent) - Production only
  if (hostname === 'nextletter.ch') {
    const url = request.nextUrl.clone()
    url.host = 'www.nextletter.ch'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
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
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
