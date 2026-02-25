import { signOut } from "../../../auth"
 
export function SignOut() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signOut()
      }}
    >
      <button>Sign Out</button>
    </form>
  )
}