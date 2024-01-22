import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const Header = ()=> {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})

    return(
        <header id="header" className="w-full h-screen flex items-center justify-center p-5">
            <div
            ref={ref}
            style={{
            transform: isInView ? "none" : "translatey(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}
            className="max-w-[1450px] w-full h-full flex flex-col justify-center">
                <span className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">Olá, sou Daniel</span>
                <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold mt-4 lg:max-w-[50vw] max-w-max">Desenvolvedor <br/>Front-End</h1>
                <p className="xl:max-w-[50vw] max-w-max mt-8 lg:text-lg md:text-md text-sm font-light">Minha verdadeira paixão é a criação de interfaces amigáveis e funcionais. Estou comprometido em aprimorar minhas habilidades, mantendo-me atualizado com as últimas tendências no desenvolvimento web. Estou empolgado para contribuir em projetos desafiadores, aplicando tanto meu conhecimento acadêmico quanto prático para criar experiências de usuário excepcionais em <b className="font-bold">React</b>. Atualmente estou cursando Sistemas de informação, realizo trbalhos freelancer e estou estudando <b className="font-bold">Next</b>.</p>
                <div className="text-4xl md:text-6xl mt-12 flex md:gap-14 gap-6">
                    <a href="https://github.com/DanielSantana47" target="_blank" className="hover:scale-125 transition-all duration-300 hover:text-primary">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-santana-5647792aa/" target="_blank" className="hover:scale-125 transition-all duration-300 hover:text-primary">
                        <FaLinkedin />
                    </a>
                </div>
                <a href="#technologies" className="mx-auto text-2xl sm:text-3xl mt-10 hover:scale-150 hover:text-primary transition-all duration-300">
                    <IoIosArrowDown />
                </a>
            </div>    
        </header>
    )
}