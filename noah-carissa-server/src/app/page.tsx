import Image from "next/image";
import { SignIn } from "./components/auth/signin";
import { auth, signOut } from "@/auth";
import { SignOut } from "./components/auth/signout";
import Link from "next/link";
import Navbar from "./components/nav/navbar";
import chimneyRock from "/chimneyrock.jpg"
// import { stringify } from "querystring";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    // This shouldn't happen thanks to middleware, but good to have
    return <SignIn/>
  }

  return (
    <div className="position-relative" style={{width: "100vw", height: "100vh"}}>
      <Image src="/chimneyrock.jpg" fill alt={"chimney rock"} className="object-cover"/>
      <div className="d-flex position-relative justify-content-center align-items-center w-100 h-100" style={{zIndex: 10}}>
        <div className="bg-white h-50 w-50 text-center align-content-center rounded-5 opacity-75 border border-dark border-5">
          <div className="opacity-100 fw-bold">
            CONTENT GOES HERE? <br/>
            Maybe a welcome and links here?
          </div>
        </div>
      </div>
    </div>
  );
}
