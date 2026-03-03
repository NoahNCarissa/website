import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="position-relative" style={{width: "100vw", height: "100vh"}}>
      <Image src="/chimneyrock.jpg" fill alt={"chimney rock"} className="object-cover"/>
      <div className="d-flex position-relative justify-content-center align-items-center w-100 h-100" style={{zIndex: 10}}>
        <div className="bg-white h-50 w-50 text-center align-content-center rounded-5 opacity-75 border border-dark border-5">
          <div className="opacity-100 fw-bold">
            CONTENT GOES HERE? <br/>
            Maybe a welcome and links here?<br/>
            <Link href="/info">Enter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
