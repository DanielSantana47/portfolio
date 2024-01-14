import { IconType } from "@/types/icon"
import { useInView } from "framer-motion"
import { useRef } from "react"

export const ContactIcon = ({icon}: IconType)=> {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    return(
        <a 
        ref={ref}
            style={{
            transform: isInView ? "none" : "translatex(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}
        href="" className='sm:text-5xl text-3xl'>
            {icon}
        </a>
    )
}