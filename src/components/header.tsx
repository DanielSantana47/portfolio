import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Header = ()=> {
    return(
        <header id="header" className="w-screen h-screen px-52">
            <div className="w-full h-full flex flex-col justify-center">
                <span className="text-primary font-bold text-xl">Olá, sou Daniel</span>
                <h1 className="text-8xl font-bold mt-4 max-w-[50vw]">Desenvolvedor Front-End</h1>
                <p className="max-w-[50vw] mt-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="text-6xl mt-12 flex gap-14">
                    <a href="https://github.com/DanielSantana47" target="_blank" className="hover:scale-125 transition-all duration-300 hover:text-primary">
                        <FaGithub />
                    </a>
                    <a href="" className="hover:scale-125 transition all duration-300 hover:text-blue-500">
                        <FaLinkedin />
                    </a>
                </div>
            </div>    
        </header>
    )
}