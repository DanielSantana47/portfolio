import { DarkMode } from "@/context/darkMode";
import { TechBoxType } from "@/types/techBoxType";
import { useInView } from "framer-motion";
import { useContext, useRef } from "react";

export const TechBox = ({icon, label}: TechBoxType)=> {
    const darkModeCtx = useContext(DarkMode)
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})

    return(
        <div
        ref={ref}
            style={{
            transform: isInView ? "none" : "translatey(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}
        className="flex items-center justify-center">
            <div className={`${darkModeCtx?.darkMode == true && darkModeCtx.darkMode !== null ? 'bg-zinc-200' : 'bg-zinc-700'} p-12 sm:p-14 md:p-20 flex  flex-col items-center justify-center rounded-lg group shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300`}>
            <img src={icon} className="w-28"/>
                <p className={`font-bold mt-6 sm:text-xl text-md absolute translate-y-10 text-transparent group-hover:translate-y-16 sm:group-hover:translate-y-18 md:group-hover:translate-y-20 ${darkModeCtx?.darkMode == true ? 'group-hover:text-black' : 'group-hover:text-white'} transition all duration-300`}>{label}</p>
            </div>
        </div>
    )
}