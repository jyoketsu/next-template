import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { NextRequest, NextResponse } from "next/server";

// export default NextAuth(authConfig).auth;
/**
 * 在 Next.js 中，当同时使用 NextAuth 中间件和自定义中间件时，需要手动合并两者。
 * 注释掉之前的export default NextAuth(authConfig).auth;
 * 添加 return authMiddleware(request);
 */
const authMiddleware = NextAuth(authConfig).auth;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("---pathname---", pathname);
  if (request.nextUrl.pathname.startsWith("/middleware-redirect")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/middleware-rewrite")) {
    return NextResponse.rewrite(new URL("/example", request.url));
  }

  // @ts-ignore 执行 NextAuth 中间件
  return authMiddleware(request);
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  /**
   * / 匹配根路径
   * ((?!...).*) 是一个负向前瞻断言，表示匹配除了指定模式之外的所有内容
   * 排除以下路径：
   *  api：所有以/api开头的路径
   *  _next/static：Next.js的静态资源路径
   *  _next/image：Next.js的图像优化路径
   *  .*\\.png$：所有以.png结尾的文件
   *  .*\\.svg$：所有以.svg结尾的文件
   */
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)"],
};
