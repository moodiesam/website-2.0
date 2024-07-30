import Link from "next/link"
import Image from "next/image"
import linkedin from '../../../public/linkedin.png'
import github from '../../../public/github.png'

const Footer = () => {
    return (
        <footer id="footer" className="relative flex flex-col items-center justify-center h-15 p-4 bg-zinc-950 text-zinc-50">
            <div id="links" className="flex pb-5">
                <Link href='https://www.linkedin.com/in/campbell-sam/' target="_blank" className="pr-3">
                    <Image src={linkedin} height={30} alt="LinkedIn Logo" />
                </Link>
                <Link href='https://github.com/moodiesam' target="_blank" className="pl-3">
                    <Image src={github} height={30} alt="Github Logo" />
                </Link>
            </div>
            <div className="">sampmcampbell@gmail.com</div>
            <div>Copyright Sam Campbell 2024</div>
        </footer>
    )
}

export default Footer