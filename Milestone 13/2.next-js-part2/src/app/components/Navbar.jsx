import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <ul className="flex justify-around text-3xl font-bold bg-cyan-900">
                <Link href="/"><li>Home</li></Link>
                <Link href="/posts"><li>Posts</li></Link>
                <Link href="/about-me"><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;