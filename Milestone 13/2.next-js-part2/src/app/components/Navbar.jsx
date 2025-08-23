"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="flex justify-around text-3xl font-bold bg-cyan-900 h-14 items-center">
                <Link href="/" className= {pathname === "/" && "active"}><li>Home</li></Link>
                <Link href="/posts" className={pathname === "/posts" && "active"}><li>Posts</li></Link>
                <Link href="/meals-react-way" className={pathname === "/meals-react-way" && "active"}><li>Meals React</li></Link>
                <Link href="/meals-nextjs-way" className={pathname === "/meals-nextjs-way" && "active"}><li>Meals NextJS</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;