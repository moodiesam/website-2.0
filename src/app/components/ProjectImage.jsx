'use client'

import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'

const ProjectImage = ({ picture, altText, link}) => {

    const [springs, api] = useSpring(() => (
        {
        from: {scale: 1}
        }
    ))

    const handleEnter = () => {
      api.start({
        to: {scale: 1.1},
      })
    }

    const handleLeave = () => {
        api.start({
            to: {scale: 1},
        })
    }

return (
        <animated.a href={link} target="_blank" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{...springs}} className='px-5 xl:mr-10 md:w-1/2'>
           <Image src={picture} alt={altText} className="" />
        </animated.a>
    )
}

export default ProjectImage