import { auth } from "@/auth";
import { SignIn } from "../components/signin";

export async function Wedding() {
  const session = await auth();

  if (!session?.user) {
    // This shouldn't happen thanks to middleware, but good to have
    return <SignIn/>
  }

  return (
    <div className={""}>
      <main className={""}>

      </main>
    </div>
  )
}