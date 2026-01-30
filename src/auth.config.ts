import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.avatar = user.avatar;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.name = token.name;
        // @ts-ignore
        session.user.avatar = token.avatar;
        // @ts-ignore
        session.user.id = token.id;
      }
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      // 检查用户登录状态
      const isLoggedIn = !!auth?.user;
      // 需要授权的路由列表
      const protectedRoutes = [
        "/need-authorized",
        "/example/prisma-postgres",
      ];
      // 判断当前是否在需要授权的页面
      const isOnProtectedRoute = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );

      // 处理需要授权的页面访问
      if (isOnProtectedRoute) {
        // 已登录用户允许访问
        if (isLoggedIn) return true;
        // 未登录用户拒绝访问（会跳转到登录页）
        return false;
      } else if (isLoggedIn && nextUrl.pathname.startsWith("/login")) {
        return Response.redirect(
          new URL(isOnProtectedRoute ? protectedRoutes[0] : "/", nextUrl)
        );
      }
      // 允许未登录用户访问其他页面
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
  trustHost: true,
  secret: "wmTvs/6aT7k+34WmIyoYBwb9BsV3cbjCbk5f0vPCkc8=",
} satisfies NextAuthConfig;
