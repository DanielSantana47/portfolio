import { SiAlienware } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { useContext, useState } from "react";
import { DarkMode } from "@/context/darkMode";
import { IoSunny } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export const Nav = ()=> {
    const darkModeCtx = useContext(DarkMode)
    const [openMenu, setOpenMenu] = useState(true)
    
    return(
        <nav className={`w-screen h-12 sm:h-16 fixed flex items-center justify-center px-5 ${darkModeCtx?.darkMode == true ? 'bg-zinc-100 text-black' : 'bg-zinc-900 text-white shadow-zinc-700'} flex justify-between items-center z-50 shadow-sm transition-all duration-300`}>
            <div className="max-w-[1450px] w-full h-full flex justify-center items-center mx-auto">
                <div className="w-full h-full flex justify-between items-center">
                    <a href="#header">
                        <SiAlienware className="text-2xl sm:text-3xl md:text-4xl hover:text-primary hover:scale-110 transition-all duration-300"/>
                    </a>
                    <ul className="sm:flex items-center gap-10 md:gap-16 hidden sm:text-md md:text-lg lg:text-xl font-semibold">
                        <a href="#header" className="hover:text-primary hover:pb-4 transition-all duration-300">Home</a>
                        <a href="#technologies" className="hover:text-primary hover:pb-4 transition-all duration-300">Tecnologias</a>
                        <a href="#projects" className="hover:text-primary hover:pb-4 transition-all duration-300">Projetos</a>
                        <a href="#contact" className="hover:text-primary hover:pb-4 transition-all duration-300">Contato</a>
                    </ul>
                    <div onClick={()=>darkModeCtx?.setDarkMode(!darkModeCtx.darkMode)}>
                        {darkModeCtx?.darkMode == true && 
                            <FaMoon className="text-2xl sm:text-3xl hover:text-primary hover:-rotate-90 transition-all duration-300 cursor-pointer"/>
                        }
                        {darkModeCtx?.darkMode == false && 
                            <IoSunny className="text-2xl sm:text-3xl hover:text-primary hover:-rotate-90 transition-all duration-300 cursor-pointer"/>
                        }
                    </div>
                    
                    <div onClick={()=> setOpenMenu(true)} className="flex sm:hidden text-xl">
                        <RiMenu3Fill />
                    </div>
                        <div className={`fixed flex items-end flex-col sm:hidden left-0 right-0 top-0 bottom-0 ${openMenu == true ? 'translate-x-0' : '-translate-x-[100vw]'}  ${darkModeCtx.darkMode == true ? 'bg-zinc-200 text-black' : 'bg-zinc-800 text-white'} transition-all duration-500`}>
                            <div onClick={()=> setOpenMenu(false)} className="">
                                <IoMdClose className="m-2 text-3xl"/>
                            </div>
                                <ul className="h-full  flex flex-col mx-auto gap-12 pb-28 text-xl justify-center items-center font-semibold">
                                    <a onClick={()=> setOpenMenu(false)} href="#header" className="hover:text-primary transition-all duration-300">Home</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#technologies" className="hover:text-primary transition-all duration-300">Tecnologias</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#projects" className="hover:text-primary transition-all duration-300">Projetos</a>
                                    <a onClick={()=> setOpenMenu(false)} href="#contact" className="hover:text-primary transition-all duration-300">Contato</a>
                                </ul>
                        </div>
                </div>
            </div>
        </nav>
    )
}