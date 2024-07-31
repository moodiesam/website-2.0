import FadeInAnimation from "../components/FadeInAnimation"

export default function About() {

  // !! Previous About Section

            // <p className="pt-10 indent-5"><span className="text-5xl">W</span>ith a unique background as a specialty whole-animal butcher, I bring precision and a meticulous approach to 
            //   my career as a full stack web developer. My journey from mastering the art of butchery to coding complex 
            //   applications reflects my passion for continuous learning and adaptability. I thrive on solving problems and 
            //   creating efficient, innovative solutions. Combining my hands-on experience with a deep understanding of technology, 
            //   I am excited to craft seamless and user-friendly digital experiences.
            // </p>

    return <>
        <section id="aboutPage">
          <div className="container flex flex-col justify-center mx-auto pt-10 space-y-12 md:space-y-0">
            <FadeInAnimation text="Hi, I'm Sam! 👋" classNames="max-w-md text-4xl font-bold text-center md:text-5xl" />
            <p className="pt-10 indent-5"><span className="text-5xl">A</span>s a dedicated full-stack web developer, I bring a unique blend of precision, 
              creativity, and resilience to the tech world. My journey into web development is anything but conventional; it started with a deep-rooted 
              passion for the meticulous craft of whole-animal butchery. This experience honed my attention to detail and problem-solving skills, essential 
              traits that I now leverage to build innovative and efficient web applications.
            </p>
            <p className="pt-5 indent-5">
              Throughout my career transition, I have immersed myself in mastering both front-end and back-end technologies. I have a proven track record 
              of delivering high-quality projects by employing a meticulous approach and a strong commitment to continuous learning. This adaptability 
              ensures that I stay at the forefront of web development trends, always ready to tackle new challenges with creative solutions.
            </p>
            <p className="pt-5 indent-5">
              I thrive on transforming complex problems into streamlined, user-centric solutions. My background as a specialty butcher may seem worlds 
              apart from coding, but it has instilled in me a meticulous approach and a deep respect for the art of crafting – whether it's a perfectly 
              cut piece of meat or a seamless user interface. This unique perspective allows me to bring a fresh, holistic approach to web development.
            </p>
            <p className="pt-5 indent-5">
              I am excited to continue this journey, leveraging my diverse skills and experiences to contribute to cutting-edge projects and collaborate 
              with forward-thinking teams. My goal is to create digital solutions that not only meet but exceed user expectations, driving innovation and 
              efficiency in every line of code.
            </p>
          </div>
          <div className="container flex flex-col justify-center items-center max-w-5xl px-14 mx-auto pt-20 space-y-12 mb-10 md:space-y-0">
            <h2 className="max-w-md text-3xl text-center pb-8">Skills</h2>
            <div className="container flex flex-col md:flex-row">
              <div className="skillGroup flex flex-col items-center border border-zinc-600 rounded py-5 mb-5 md:ml-5 md:w-1/3">
                <h3 className="mb-4 border-b border-lustRed">Languages</h3>
                <ul className="flex flex-col items-center">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JSON</li>
                  <li>JSX</li>
                  <li>PUG</li>
                </ul>
              </div>
              <div className="skillGroup flex flex-col items-center border border-zinc-600 rounded py-5 mb-5 md:mx-5 md:w-1/3">
                <h3 className="mb-4 border-b border-lustRed">Tools</h3>
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
              <div className="skillGroup flex flex-col items-center border border-zinc-600 rounded py-5 md:mr-5 md:mb-5 md:w-1/3">
                <h3 className="mb-4 border-b border-lustRed">Concepts</h3>
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