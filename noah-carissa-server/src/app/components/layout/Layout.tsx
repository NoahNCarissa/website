import Navbar from "../nav/navbar";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Layout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
){  
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const loading = status === 'loading';

    useEffect(() => {
        // If not loading and not authenticated, redirect to login
        if (!loading && !session) {
            signIn(undefined, { callbackUrl: pathname||"/" }); // Redirects to the sign-in page
        }
    }, [session, loading]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!session) {
        return null; // or a loading spinner while the redirect takes effect
    }

    return (<>
    <html>
        <body>
            <Navbar/>
            {children}
        </body>
    </html>
    </>)
}
