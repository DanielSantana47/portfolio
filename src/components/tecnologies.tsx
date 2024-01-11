import { TechBox } from "./techBox"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export const Techs = ()=> {
    return(
        <section id="technologies" className="w-creen h-full px-20 flex flex-col justify-center mb-20 pt-16">
            <div className="mb-20">
                <h1 className="text-7xl inline-block pb-6 font-bold">Tecnologias</h1>
                <div className="w-52 border-b-4 border-primary"></div>
            </div>
            <div className="grid gap-8 grid-cols-3 w-full h-full items-center justify-center text-9xl">
                <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} label="HTML"/>
                <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} label="CSS"/>
                <TechBox icon={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} label="Javascript"/>
                <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} label="Typescript"/>
                <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} label="React Ts"/>
                <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} label="Tailwind CSS"/>
                <div className="col-span-3">
                    <TechBox icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} label="Next Js"/>
                </div>
            </div>
        </section>
    )
}