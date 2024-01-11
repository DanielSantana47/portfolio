import { SiAlienware } from "react-icons/si";
import { FaMoon } from "react-icons/fa";

export const Nav = ()=> {
    return(
        <nav className="fixed px-52 left-0 right-0 top-0 h-16 bg-zinc-100 flex justify-between items-center z-50">
            <a href="#header">
                <SiAlienware className="text-4xl hover:text-primary transition-all duration-300"/>
            </a>
            <ul className="flex items-center gap-16 text-xl font-semibold">
                <a href="#header" className="hover:text-primary hover:pb-4 transition-all duration-300">Home</a>
                <a href="#technologies" className="hover:text-primary hover:pb-4 transition-all duration-300">Tecnologias</a>
                <a href="#projects" className="hover:text-primary hover:pb-4 transition-all duration-300">Projetos</a>
                <a href="#contact" className="hover:text-primary hover:pb-4 transition-all duration-300">Contato</a>
            </ul>
            <div>
                <FaMoon className="text-3xl hover:text-primary hover:-rotate-90 transition-all duration-300 cursor-pointer"/>
            </div>
        </nav>
    )
}