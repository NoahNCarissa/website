"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  const credentialsAction = (formData: FormData) => {
    signIn("credentials")
  }
 
  return (
    <form action={credentialsAction}>
      <label htmlFor="credentials-password">
        Password
        <input type="password" id="credentials-password" name="password" />
      </label>
      <input type="submit" value="Sign In" />
    </form>
  )
}