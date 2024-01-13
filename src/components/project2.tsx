import { DarkMode } from "@/context/darkMode"
import { ProjectType } from "@/types/project"
import { useContext } from "react"
import { TechBox } from "./techBox"

export const Project2 = ({body,src,title,site,code,blockCode}:ProjectType)=> {
    const darkModeCtx = useContext(DarkMode)
    return(
        <div className={`w-full h-full flex xl:flex-row flex-col justify-center gap-6 p-3 md:p-6 ${darkModeCtx?.darkMode == true ? 'bg-zinc-200' : 'bg-zinc-700'} rounded-xl shadow-xl transition-all duration-300`}>
                <a href={site} target="_blank" className={`flex-1 flex items-center rounded-xl overflow-hidden`}>
                    <img src={src} alt="" className={` h-full border ${darkModeCtx?.darkMode == true ? 'border-zinc-400' : 'border-transparent'} object-left object-cover transition-all duration-500 rounded-xl`}/>
                </a>
                <div className="flex-1 p-6">
                    <h3 className="md:text-5xl sm:text:4xl text-3xl font-semibold mb-8">{title}</h3>
                    <p className="md:text-lg sm:text-md text-sm font-light mb-6">{body}</p>
                    <div className="flex gap-4 md:gap-8 mb-6">
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/>
                        <img className="w-10 hover:scale-125 transition-all duration-300" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"/>
                    </div>
                    <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4 mb-5 md:mb-10">
                        <a href={code} target="_blank" className={`md:w-32 w-full py-2 flex ${blockCode == true ? 'hidden' : ''} justify-center items-center text-xl ${darkModeCtx?.darkMode == true ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} rounded-md shadow-lg  shadow-black/30 font-semibold hover:bg-primary hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300`}>
                            Código
                        </a>
                        <a href={site} target="_blank" className={`md:w-32 w-full py-2 flex justify-center items-center text-xl ${darkModeCtx?.darkMode == true ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} shadow-lg shadow-black/30 rounded-md font-semibold hover:bg-primary hover:scale-110 hover:shadow-xl hover:shadow-black/20 transition-all duration-300`}>
                            Site
                        </a>
                    </div>
                </div>

            </div>
    )
}