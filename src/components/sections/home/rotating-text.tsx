"use client"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useEffect, useState } from "react"

const rotatingTextMessages: { first: string, second: string }[] = [
    {
        first: "The Codin'",
        second: "Ronin",
    },
    {
        first: "The Lambda",
        second: "Panda",
    },
    {
        first: "The Ai",
        second: "Samurai",
    },
]
const RotatingText = () => {
    const [containerRef] = useAutoAnimate<HTMLDivElement>()
    const [currIndex, setCurrIndex] = useState(0)
    const { first, second } = rotatingTextMessages[currIndex]

    useEffect(() => {
        const myFunc = () => {
            setCurrIndex(prevIndex => (prevIndex + 1) % rotatingTextMessages.length)
        }

        const rotateTextInterval = setInterval(myFunc, 3000)

        return () => clearInterval(rotateTextInterval)
    }, [])


    return (
        <div ref={containerRef}>
            <div key={currIndex} className="text-gray-900 dark:text-white font-bold text-4xl md:text-6xl xl:text-7xl font-cal text-center mt-5 md:mt-0 whitespace-nowrap">
                {first} {" "}
                <span className="bg-gradient-to-tl from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent pb-1">{second}</span>
            </div>
        </div>
    )
}

export default RotatingText