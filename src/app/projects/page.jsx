import FadeInAnimation from "../components/FadeInAnimation"
import workoutPicture from "../../../public/workout-app.png"
import etchPicture from "../../../public/etch-a-sketch.png"
import battleshipPicture from "../../../public/battleship2.png"
import ProjectImage from "../components/ProjectImage"

const Projects = () => {
    return (
        <section id="projectsPage">
            <div className="container flex flex-col justify-center px-4 mx-auto pt-16 space-y-12 md:space-y-0 md:flex-row">
                <FadeInAnimation text="Projects..." classNames="max-w-md text-4xl font-bold text-center md:text-5xl" />
            </div>
            <div id="projects" className="container flex flex-col justify-center items-center px-4 mx-auto max-w-6xl mt-8 md:mt-24">
                <div id="project" className="container flex flex-col justify-center justify-items-center border rounded p-10 mb-10 md:mb-40 border-zinc-600 md:flex-row">
                    <ProjectImage picture={workoutPicture} altText="Screenshot of Workout Application" link="https://sam-workout-app.adaptable.app/" />
                    <div className="px-5 mt-auto xl:ml-10 md:w-1/2">
                        <h3 className="text-3xl border-b border-lustRed text-right">Workout Tracker App</h3>
                        <p>The Workout Tracker App is a comprehensive web application designed to help users create and manage their
                            exercise routines. This project showcases my skills in full stack development, utilizing the MERN stack 
                            (MongoDB, Express.js, React, and Node.js) to deliver a seamless and responsive user experience.
                        </p>
                    </div>
                </div>
                <div id="project" className="container flex flex-col justify-center justify-items-center border rounded p-10 mb-10 md:mb-40 border-zinc-600 md:flex-row-reverse">
                    <ProjectImage picture={etchPicture} altText="Screenshot of Etch-a-Sketch Application" link="https://etchasketch-delta.vercel.app/" />
                    <div className="px-5 mt-auto xl:ml-10 md:w-1/2">
                        <h3 className="text-3xl border-b border-lustRed text-right">Etch-a-Sketch</h3>
                        <p>The Etch-a-Sketch Game is an interactive and artistic web application that emulates the classic drawing toy. 
                            This project highlights my proficiency in JavaScript, particularly in using event listeners to create 
                            dynamic and responsive user interactions.
                        </p>
                    </div>
                </div>
                <div id="project" className="container flex flex-col justify-center justify-items-center border rounded p-10 mb-10 md:mb-20 border-zinc-600 md:flex-row">
                    <ProjectImage picture={battleshipPicture} altText="Screenshot of Battleship Application" link="https://battleship-beta-lac.vercel.app/" />
                    <div className="px-5 mt-auto xl:ml-10 md:w-1/2">
                        <h3 className="text-3xl border-b border-lustRed text-right">Battleship</h3>
                        <p>The Battleship Game is a classic strategy game recreated with a focus on JavaScript fundamentals and 
                            test-driven development. This project highlights my proficiency in essential JavaScript concepts such 
                            as prototypes, closures, promises, and event loops.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects