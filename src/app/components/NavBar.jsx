import Link from "next/link"
import Image from "next/image"
import logo from '../../../public/logo.png'

const NavBar = () => {
    return (
        <nav className="relative hidden items-center justify-center h-15 p-4 bg-zinc-950 text-zinc-50 sm:flex">
            <div className="absolute left-0 my-3 mx-9">
                <Link href='/' className="hover:text-zinc-600">
                    <Image src={logo} height={40} />
                </Link>
            </div>

            {/* Menu */}

            <ul className="flex justify-center align-center border-b-2">
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

            {/* Mobile Menu */}

            
        </nav>
    )
}

export default NavBar