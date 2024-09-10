import FadeInAnimation from "../components/FadeInAnimation"
import ProjectVideo from "../components/ProjectVideo"

const Recording = () => {
    return (
        <section id="booksopenRecording">
            <div className="container flex flex-col justify-center px-4 mx-auto pt-16 space-y-12 md:space-y-0 md:flex-row">
                <FadeInAnimation text="Hey BooksOpen!" classNames="max-w-md text-4xl font-bold text-center md:text-5xl" />
            </div>
            <div id="video" className="flex justify-center">
                <ProjectVideo 
                    link="https://www.youtube.com/embed/z4BCNvW5hl0?si=AnVaRR9dOmvbeUey" 
                    height="630" 
                    width="1080" 
                    title="Sam Campbell's introduction video" />
            </div>
        </section>

    )
}

export default Recording