import MyResume from "../../../../public/Resume.png"
import Image from "next/image"

export default function Resume() {
    return (
        <section id="resumeSection" className="flex justify-center my-12">
            <div className="max-w-5xl">
                <Image src={MyResume} />
            </div>
        </section>
    )
}