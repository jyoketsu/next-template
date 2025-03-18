import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.username = token.username;
        // @ts-ignore
        session.user.avatar = token.avatar;
      }
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      // 检查用户登录状态
      const isLoggedIn = !!auth?.user;
      // 判断当前是否在需要授权的页面
      const isOnNeedAuthorized =
        nextUrl.pathname.startsWith("/need-authorized");

      // 处理需要授权的页面访问
      if (isOnNeedAuthorized) {
        // 已登录用户允许访问
        if (isLoggedIn) return true;
        // 未登录用户拒绝访问（会跳转到登录页）
        return false;
      } else if (isLoggedIn && nextUrl.pathname.startsWith("/login")) {
        return Response.redirect(
          new URL(isOnNeedAuthorized ? "/need-authorized" : "/", nextUrl)
        );
      }
      // 允许未登录用户访问其他页面
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
