'use client'

import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import Image from "next/image"
import Copy from '../../../public/copy.png'

const CopyEmail = () => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        setIsCopied(true)
    }

    useEffect(() => {
        if(isCopied) {
            setTimeout(() => setIsCopied(false), 2000)
        }
    }, [isCopied])

    return (
        <CopyToClipboard text={'sampmcampbell@gmail.com'} onCopy={handleCopy}>
            <button onClick={handleCopy} className="flex space-x-2">
                <Image height={25} alt="Copy Icon" src={Copy} />
                {isCopied && <div>Copied!</div>}
            </button>
        </CopyToClipboard>
    )
}

export default CopyEmail