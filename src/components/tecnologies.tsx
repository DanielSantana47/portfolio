import { TechBox } from "./techBox"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { Title } from "./title";
import { useCallback, useContext } from "react";
import { DarkMode } from "@/context/darkMode";

export const Techs = ()=> {
    const darkModeCtx = useContext(DarkMode)
    return(
        <section id="technologies" className="w-creen h-full p-5 flex flex-col justify-center items-center mb-20 pt-16">
            <div className="max-w-[1450px] w-full flex flex-col justify-start">
                <Title label="Tecnologias"/>            
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full items-center justify-center mt-20">
                    <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} label="HTML"/>
                    <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} label="CSS"/>
                    <TechBox icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} label="Javascript"/>
                    <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} label="Typescript"/>
                    <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} label="React"/>
                    <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} label="Tailwind CSS"/>
                    {darkModeCtx?.darkMode == true && 
                        <div className="lg:col-span-3">
                            <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} label="Next"/>
                        </div>
                    }
                    {darkModeCtx?.darkMode == false && 
                        <div className="lg:col-span-3">
                            <TechBox icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'} label="Next"/>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}