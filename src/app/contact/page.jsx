import FadeInAnimation from "../components/FadeInAnimation"
import Image from "next/image"
import Link from "next/link"
import phone from '../../../public/phone-outline.png'
import email from '../../../public/email-outline.png'
import linkedin from '../../../public/linkedin.png'
import github from '../../../public/github.png'
import CopyEmail from "../components/CopyEmail"

const Skills = () => {
    return (
        <section id="homepage">
            <div className="container flex flex-col justify-center px-4 mx-auto pt-10 space-y-12 items-center md:space-y-0">
                <FadeInAnimation text="Contact Info" classNames="max-w-md text-4xl font-bold text-center md:text-5xl" />
                <div className="flex flex-col items-center py-10">
                    <div>
                        <p>Got a project in mind or just want to connect? Drop me a message.</p>
                    </div>
                    <div id="phoneNumber" className="flex space-x-4 pt-16">
                        <Image src={phone} height={25} alt="Phone Icon" />
                        <div>647-544-6328</div>
                    </div>
                    <div id="email" className="flex space-x-4 py-8">
                        <Image src={email} height={25} alt="Email Icon" />
                        <div className="flex space-x-3">
                            <div className="text-lustRed">sampmcampbell@gmail.com</div>
                            <CopyEmail />
                        </div>
                    </div>
                    <div id="linkedIn" className="flex space-x-4 py-8">
                        <Link href='https://www.linkedin.com/in/campbell-sam/' target="_blank">
                            <Image src={linkedin} height={50} alt="LinkedIn Logo" />
                        </Link>
                        <Link href='https://github.com/moodiesam' target="_blank">
                            <Image src={github} height={50} alt="Github Logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills