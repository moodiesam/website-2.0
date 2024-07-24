import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="relative flex items-center justify-center h-15 p-4 bg-sky-900 text-white">
            <ul className="flex justify-center align-center border-b-2">
                <li className="my-3 mx-9">
                    <Link href='/'>Home</Link>
                </li>
                <li className="my-3 mx-9">
                    <Link href='/about'>About</Link>
                </li>
                <li className="my-3 mx-9">
                    <Link href='/projects' className="hover:text-grey-200">Projects</Link>
                </li>
                <li className="my-3 mx-9">
                    <Link href='/skills'>Skills</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar