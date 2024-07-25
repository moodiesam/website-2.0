'use client'

import { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const FadeInAnimation = ({ text, classNames }) => {

    const [springs, api] = useSpring(() => (
        {
        from: {opacity: 0},
        }
    ))

    useEffect(() => {
        api.start({
            to: {opacity: 1, diration: 1000},
            config: {duration: 1500},
        })
    })

    return (
        <animated.h1 style={{...springs}} className={classNames}>{text}</animated.h1>
    )
}

export default FadeInAnimation