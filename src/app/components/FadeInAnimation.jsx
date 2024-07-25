'use client'

import { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const FadeInAnimation = ({ text }) => {

    const [springs, api] = useSpring(() => (
        {
        from: {opacity: 0},
        }
    ))

    useEffect(() => {
        api.start({
            to: {opacity: 1, diration: 1000},
            config: {duration: 2000},
        })
    })

    return (
        <animated.h1 style={{...springs}} className='max-w-4xl text-4xl font-bold text-center mt-36 md:text-9xl'>{text}</animated.h1>
    )
}

export default FadeInAnimation