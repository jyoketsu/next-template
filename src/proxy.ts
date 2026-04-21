import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const authMiddleware = NextAuth(authConfig).auth;
const intlMiddleware = createMiddleware(routing);

export default authMiddleware((request) => {
  const { pathname } = request.nextUrl;

  if (request.nextUrl.pathname.startsWith("/middleware-redirect")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/middleware-rewrite")) {
    return NextResponse.rewrite(new URL("/example", request.url));
  }

  return intlMiddleware(request);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|.*\\.ico$).*)"]
};
