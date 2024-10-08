'use client'

import { useEffect } from "react"
import { useSpring, animated, easings } from '@react-spring/web'

const WDAnimation = ({ text }) => {

    const [springs, api] = useSpring(() => (
        {
          from: {x: -400, opacity: 0, scale: 0.5, rotate: "180deg"}
        }
      ))
    
      useEffect(() => {
        api.start({
          to: {x: 0},
        })
        api.start({
          to: {opacity: 1},
        })
        api.start({
          to: {scale: 1},
        })
        api.start({
          config: {
            duration: 1500,
            easing: easings.easeInBounce,
          },
          to: {rotate: "0deg"},
        })
      })

      // const handleSpin = () => {
      //   api.start({
      //     config: {
      //       easing: easings.easeInQuad,
      //       duration: 1000,
      //     },
      //     to: {
      //         rotate: "360deg"
      //     }
      //   })
      // }
      
    return (
        <div className="flex container justify-end md:mr-36">
          <animated.p style={{...springs}} className="text-3xl pt-10 text-lustRed">{text}</animated.p>
        </div>
        )
}

export default WDAnimation