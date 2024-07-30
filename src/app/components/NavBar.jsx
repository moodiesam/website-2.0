'use client'

import Link from "next/link"
import Image from "next/image"
import logo from '../../../public/logo.png'
import { useState } from "react"

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const handleClick = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const handleLinkClick = () => {
        setHamburgerOpen(false)
    }

    return (
        <nav className="relative flex items-center justify-end md:justify-center h-16 p-4 bg-zinc-950 text-zinc-50">
            <div className="absolute left-0 my-3 mx-9">
                <Link onClick={handleLinkClick} href='/' className="hover:text-zinc-600">
                    <Image src={logo} height={40} />
                </Link>
            </div>

            {/* Menu */}

            <ul className="hidden justify-center align-center border-b-2 md:flex">
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

            <div className="relative md:hidden">

                {/* Hamburger Icon */}
                <btn onClick={handleClick} id="menu-btn" className={"block hamburger mx-9 focus:outline-none" + (hamburgerOpen ? ' open' : '')}>
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </btn>

                {/* Mobile Menu List */}
                <div className="md:hidden">
                    <div id="menu" className={"absolute flex-col items-center" + (hamburgerOpen ? ' flex' : ' hidden')}>
                        <Link onClick={handleLinkClick} href='/about' className="hover:text-zinc-600">About</Link>
                        <Link onClick={handleLinkClick} href='/projects' className="hover:text-zinc-600">Projects</Link>
                        <Link onClick={handleLinkClick} href='/contact' className="hover:text-zinc-600">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar