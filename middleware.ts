import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_LOCALES = ["en", "de", "uk"];
const DEFAULT_LOCALE = "uk";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))) {
    return;
  }

  if (pathname === "/" || pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], 
};
