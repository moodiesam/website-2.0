import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="relative hidden items-center justify-center h-15 p-4 bg-zinc-950 text-zinc-50 sm:flex">
            <ul className="flex justify-center align-center border-b-2">
                <li className="my-3 mx-9">
                    <Link href='/' className="hover:text-zinc-600">Home</Link>
                </li>
                <li className="my-3 mx-9">
                    <Link href='/about' className="hover:text-zinc-600">About</Link>
                </li>
                <li className="my-3 mx-9">
                    <Link href='/projects' className="hover:text-zinc-600">Projects</Link>
                </li>
                <li className="my-3 mx-9">
                    <Link href='/contact' className="hover:text-zinc-600">Contact</Link>
                </li>
            </ul>
        </nav>

        // TODO Create Hamburger NavBar for smaller screens
    )
}

export default NavBar