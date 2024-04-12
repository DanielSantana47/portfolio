import { DarkMode } from "@/context/darkMode"
import { ProjectType } from "@/types/project"
import { useInView } from "framer-motion"
import { useContext, useRef } from "react"

export const Project1 = ({body,src,title,site,code,blockCode}:ProjectType)=> {
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
        className={`w-full h-full flex justify-center gap-6 p-6 ${darkModeCtx?.darkMode == true && darkModeCtx.darkMode !== null ? 'bg-zinc-200' : 'bg-zinc-700'} rounded-xl shadow-xl transition-all duration-300`}>
                
                <div className="flex-1 p-6">
                    <h3 className="text-5xl font-semibold mb-8">{title}</h3>
                    <p className="text-lg mb-6 font-light">{body}</p>
                    <div className="flex gap-8 mb-6">
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"/>
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"/>
                    </div>
                    <div className="flex gap-8 mb-10">
                        <a href={code} target="_blank" className={`w-32 py-2 ${blockCode == true ? 'hidden' : ''} flex justify-center items-center text-xl ${darkModeCtx?.darkMode == true && darkModeCtx.darkMode !== null ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} rounded-md shadow-lg  shadow-black/30 font-semibold hover:bg-primary hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300`}>
                            Código
                        </a>
                        <a href={site} target="_blank" className={`w-32 py-2 flex justify-center items-center text-xl ${darkModeCtx?.darkMode == true && darkModeCtx.darkMode !== null ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} shadow-lg shadow-black/30 rounded-md font-semibold hover:bg-primary hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300`}>
                            Site
                        </a>
                    </div>
                </div>
                <a href={site} target="_blank" className={`flex-1 flex items-center rounded-xl overflow-hidden`}>
                    <img src={src} alt="" className={` h-full border ${darkModeCtx?.darkMode == true && darkModeCtx.darkMode !== null ? 'border-zinc-400' : 'border-transparent'} object-left object-cover transition-all duration-500 rounded-xl`}/>
                </a>

            </div>
    )
}