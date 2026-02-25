"use client"
import { isLoggedIn } from "@/app/api/auth/sesson";
import { auth } from "../../../auth";
import { Session } from "next-auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(){
    
    return (
        <>
        <div className="align-content-end px-3" style={{height: "50px"}}>
            <Link href="/" className="btn btn-primary rounded-4 rounded-bottom-0 border border-2 border-warning border-bottom-0">Home</Link>
            <Link href="/info" className="btn btn-primary rounded-4 rounded-bottom-0 border border-2 border-warning border-bottom-0">Info</Link>
            <Link href="/wedding" className="btn btn-primary rounded-4 rounded-bottom-0 border border-2 border-warning border-bottom-0">Wedding</Link>
            <Link href="/about" className="btn btn-primary rounded-4 rounded-bottom-0 border border-2 border-warning border-bottom-0">About</Link>
            {/* {session != null ? session.user?.name : null} */}
        </div>
        </>
    )
}