"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ServicePages() {
    const router = useRouter();

    function handleButton() {
        router.push("/about-me")
    }
    return(
        <div>
            Service Pages
            <Link href = "/about-me" className="text-blue-500 text-3xl">Go to about me page</Link>
            <button onClick={handleButton}>Click button</button>
        </div>
    )
}

export default ServicePages;