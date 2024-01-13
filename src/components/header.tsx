import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const Header = ()=> {
    return(
        <header id="header" className="w-full h-screen flex items-center justify-center p-5">
            <div className="max-w-[1450px] w-full h-full flex flex-col justify-center">
                <span className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">Olá, sou Daniel</span>
                <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold mt-4 lg:max-w-[50vw] max-w-max">Desenvolvedor <br/>Front-End</h1>
                <p className="lg:max-w-[50vw] max-w-max mt-8 lg:text-lg md:text-md text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="text-4xl md:text-6xl mt-12 flex md:gap-14 gap-6">
                    <a href="https://github.com/DanielSantana47" target="_blank" className="hover:scale-125 transition-all duration-300 hover:text-primary">
                        <FaGithub />
                    </a>
                    <a href="" className="hover:scale-125 transition all duration-300 hover:text-primary">
                        <FaLinkedin />
                    </a>
                </div>
                <a href="#technologies" className="mx-auto text-2xl sm:text-3xl mt-10 hover:scale-150 transition-all duration-300">
                    <IoIosArrowDown />
                </a>
            </div>    
        </header>
    )
}