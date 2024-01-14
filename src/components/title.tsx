import { TitleType } from "@/types/title"
import { useInView } from "framer-motion"
import { useRef } from "react"

export const Title = ({label}:TitleType)=> {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})

    return(
        <div
        ref={ref}
            style={{
            transform: isInView ? "none" : "translatey(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}
        className="mb-0">
                <h2 className="text-4xl sm:text-6xl md:text-7xl inline-block md:pb-6 pb-3 font-bold">{label}</h2>
                <div className="w-32 md:w-52 md:border-b-4 border-b-2 border-primary"></div>
            </div>
    )
}