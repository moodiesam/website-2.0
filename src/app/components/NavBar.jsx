import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="relative flex items-center justify-center h-15 p-4 bg-zinc-950 text-zinc-50">
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
                    <Link href='/skills' className="hover:text-zinc-600">Skills</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar