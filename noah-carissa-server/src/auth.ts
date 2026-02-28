import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import nextConfig from "@/../next.config"
import { User } from "./lib/types/User"
import { authConfig } from "./auth.config"
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,  
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        password: {},
      },
      authorize: async (credentials) => {
        let user:User|null = null

        if (nextConfig?.env?.PASSWORD && credentials.password == nextConfig.env.PASSWORD)
          user = {
            name: "Logged In UserName"
          };
 
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      },
    }),
  ],
})