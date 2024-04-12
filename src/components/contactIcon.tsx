import { IconType } from "@/types/icon"
import { useInView } from "framer-motion"
import { useRef } from "react"

export const ContactIcon = ({icon, link}: IconType)=> {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    return(
        <a
        target="_blank"
        ref={ref}
            style={{
            transform: isInView ? "none" : "translatex(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}
        href={link} className='sm:text-5xl text-3xl'>
            {icon}
        </a>
    )
}