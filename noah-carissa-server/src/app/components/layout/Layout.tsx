import Navbar from "../nav/navbar";

export default function Layout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
){
    return (<>
    <html>
        <body>
            <Navbar/>
            {children}
        </body>
    </html>
    </>)
}
