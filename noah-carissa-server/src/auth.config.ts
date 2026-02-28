import next from 'next';
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: "/login"
  },
  callbacks: {
    authorized({ auth, request: {nextUrl} }) {
      console.log(nextUrl.basePath)

      return true;
      if (!auth?.user) {
        return false;
        // return Response.redirect(new URL("/", nextUrl))
      }

      // const isOnDashboard = nextUrl.pathname.startsWith('/info');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/info', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;