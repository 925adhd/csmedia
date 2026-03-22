import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: Request) {
  const url = new URL(request.url);
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookies(request.headers.get("cookie") || "");
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect /admin routes (except /admin/login and /admin/setup)
  if (url.pathname.startsWith("/admin") && url.pathname !== "/admin/login" && url.pathname !== "/admin/setup") {
    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // Redirect logged-in users away from login page
  if (url.pathname === "/admin/login" && user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return supabaseResponse;
}

function parseCookies(cookieHeader: string) {
  return cookieHeader.split(";").filter(Boolean).map((cookie) => {
    const [name, ...rest] = cookie.trim().split("=");
    return { name, value: rest.join("=") };
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
