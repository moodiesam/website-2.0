'use client'

import "./globals.css"
import WDAnimation from './components/WDAnimation'
import FadeInAnimation from './components/FadeInAnimation'

export default function Home() {

  return <>
    <section id="homepage">
      <div className="container flex flex-col align-center items-center px-4 mx-auto space-y-12 md:space-y-0">
        <FadeInAnimation text="Sam Campbell" />
        <WDAnimation text="Web Developer" />
      </div>
    </section>
  </>
}
