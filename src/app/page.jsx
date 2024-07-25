'use client'

import "./globals.css"
import { useSpring, animated } from '@react-spring/web'

export default function Home() {

  const spring = useSpring({
    from: {x: 0, opacity: 0, scale: 0.5, rotate: "180deg"},
    to: {x: 400, opacity: 1, scale: 1, rotate: "0deg"},
  })

  console.log('hello')

  return <>
    <section id="homepage">
      <div className="container flex flex-col align-center items-center px-4 mx-auto space-y-12 md:space-y-0">
        <h1 className="max-w-4xl text-4xl font-bold text-center mt-36 md:text-9xl">Sam Campbell</h1>
        <animated.p style={{...spring}} className="text-3xl pt-10">Web Developer</animated.p>
      </div>
    </section>
  </>
}
