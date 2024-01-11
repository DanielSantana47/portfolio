import { SiAlienware } from "react-icons/si";
import { FaMoon } from "react-icons/fa";

export const Nav = ()=> {
    return(
        <nav className="fixed px-20 left-0 right-0 top-0 h-16 bg-white flex justify-between items-center z-50">
            <div>
                <SiAlienware className="text-4xl"/>
            </div>
            <ul className="flex items-center gap-16 text-xl font-semibold">
                <a href="#header" className="hover:text-primary transition-colors duration-300">Home</a>
                <a href="#technologies" className="hover:text-primary transition-colors duration-300">Tecnologias</a>
                <a href="#projects" className="hover:text-primary transition-colors duration-300">Projetos</a>
                <a href="" className="hover:text-primary transition-colors duration-300">Sobre mim</a>
                <a href="" className="hover:text-primary transition-colors duration-300">Contato</a>
            </ul>
            <div>
                <FaMoon className="text-3xl"/>
            </div>
        </nav>
    )
}