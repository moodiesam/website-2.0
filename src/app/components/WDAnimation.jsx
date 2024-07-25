'use client'

import { useEffect } from "react"
import { useSpring, animated } from '@react-spring/web'

const WDAnimation = ({ text }) => {

    const [springs, api] = useSpring(() => (
        {
          from: {x: 0, opacity: 0, scale: 0.5, rotate: "180deg"}
        }
      ))
    
      useEffect(() => {
        api.start({
          to: {x: 400},
        })
        api.start({
          to: {opacity: 1},
        })
        api.start({
          to: {scale: 1},
        })
        // api.start({
        //   to: {rotate: "0deg"},
        // })
      })

      const handleSpin = () => {
        api.start({
            to: {
                rotate: "0deg"
            }
        })
      }
    
    return (
        <animated.p onMouseEnter={handleSpin} style={{...springs}} className="text-3xl pt-10">{text}</animated.p>
    )
}

export default WDAnimation