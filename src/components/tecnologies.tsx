import { TechBox } from "./techBox"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export const Techs = ()=> {
    return(
        <section className="w-creen h-screen px-20 flex justify-center">
            <div className="grid grid-cols-3 w-full h-full items-center justify-center text-9xl">
                <TechBox icon={<FaHtml5/>} label="HTML"/>
                <TechBox icon={<FaCss3Alt/>} label="CSS"/>
                <TechBox icon={<IoLogoJavascript />} label="Javascript"/>
                <TechBox icon={<SiTypescript />} label="Typescript"/>
                <TechBox icon={<FaReact />} label="React Ts"/>
                <TechBox icon={<SiTailwindcss/>} label="Tailwind CSS"/>
                <div className="col-span-3">
                    <TechBox icon={<img className="w-32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />} label="Next Js"/>
                </div>
            </div>
        </section>
    )
}