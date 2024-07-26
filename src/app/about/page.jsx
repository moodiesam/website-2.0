import FadeInAnimation from "../components/FadeInAnimation"

export default function About() {
    return <>
        <section id="aboutPage">
          <div className="container flex flex-col justify-center px-4 mx-auto pt-10 space-y-12 md:space-y-0">
            <FadeInAnimation text="Hi! My name is Sam Campbell" classNames="max-w-md text-4xl font-bold text-center md:text-5xl" />
            <p className="pt-10 indent-5"><span className="text-5xl">W</span>ith a unique background as a specialty whole-animal butcher, I bring precision and a meticulous approach to 
              my career as a full stack web developer. My journey from mastering the art of butchery to coding complex 
              applications reflects my passion for continuous learning and adaptability. I thrive on solving problems and 
              creating efficient, innovative solutions. Combining my hands-on experience with a deep understanding of technology, 
              I am excited to craft seamless and user-friendly digital experiences.
            </p>
          </div>
          <div className="container flex flex-col justify-center items-center max-w-5xl px-14 mx-auto pt-20 space-y-12 md:space-y-0">
            <h2 className="max-w-md text-3xl text-center pb-8">Skills</h2>
            <div className="container flex py-8 border border-zink-50 rounded-md">
              <div className="skillGroup flex flex-col items-center border border-zinc-600 rounded py-5 ml-5 w-1/3">
                <h3 className="pb-4">Languages</h3>
                <ul className="flex flex-col items-center">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JSON</li>
                  <li>JSX</li>
                  <li>PUG</li>
                </ul>
              </div>
              <div className="skillGroup flex flex-col items-center border border-zinc-600 rounded py-5 mx-5 w-1/3">
                <h3 className="pb-4">Tools</h3>
                <ul className="flex flex-col items-center">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>Express</li>
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>Version Control</li>
                  <li>Command Line</li>
                  <li>Mongoose</li>
                  <li>bcryptjs</li>
                  <li>Jest</li>
                  <li>React Testing Library</li>
                  <li>Postman</li>
                  <li>Prismic</li>
                </ul>
              </div>
              <div className="skillGroup flex flex-col items-center border border-zinc-600 rounded py-5 mr-5 w-1/3">
                <h3 className="pb-4">Concepts</h3>
                <ul className="flex flex-col items-center">
                  <li>RESTful APIs</li>
                  <li>JSON Web Tokens</li>
                  <li>Object-Oriented Programming</li>
                  <li>W3C Standards</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
}