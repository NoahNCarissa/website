import Link from "next/link";

export default function Navbar(){

    return (
        <>
        <div className="align-content-end px-3" style={{height: "50px"}}>
            <Link href="/" className="btn btn-primary rounded-4 rounded-bottom-0 border border-2 border-warning border-bottom-0">Home</Link>
            <Link href="/wedding" className="btn btn-primary rounded-4 rounded-bottom-0 border border-2 border-warning border-bottom-0">Wedding</Link>
        </div>
        </>
    )
}