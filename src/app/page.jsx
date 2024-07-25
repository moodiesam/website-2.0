'use client'

import "./globals.css"
import WDAnimation from './components/WDAnimation'

export default function Home() {

  return <>
    <section id="homepage">
      <div className="container flex flex-col align-center items-center px-4 mx-auto space-y-12 md:space-y-0">
        <h1 className="max-w-4xl text-4xl font-bold text-center mt-36 md:text-9xl">Sam Campbell</h1>
        <WDAnimation />
      </div>
    </section>
  </>
}
