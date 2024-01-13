import { Title } from "./title"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ContactIcon } from "./contactIcon";
import { useContext } from "react";
import { DarkMode } from "@/context/darkMode";

export const Contact = ()=> {
    const darkModeCtx = useContext(DarkMode)

    return(
        <section  id="contact" className="w-creen h-full flex flex-col justify-center items-center p-5">
            <div className="max-w-[1450px] w-full h-full flex flex-col justify-center">
                <Title label="Contato"/>
                <div className="mt-20 justify-center hidden lg:flex">
                    <div className="flex mb-10 lg:mb-0 lg:flex-col justify-center gap-12 text-primary flex-1">
                        <ContactIcon icon={<FaWhatsapp className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon icon={<FaLinkedin className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon icon={<SiGmail className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon icon={<FaPhoneSquareAlt className='hover:scale-125 transition-all duration-300'/>}/>
                    </div>
                    <form action="" className="flex-1 flex flex-col gap-4">
                        <div className="flex gap-8">
                            <input type="text" className={`flex-1 rounded-lg px-4 py-3 text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} placeholder="Digite seu nome..."/>
                            <input type="email" className={`flex-1 rounded-lg px-4 py-3 text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} placeholder="Digite seu Gmail..."/>
                        </div>
                        <textarea name="" id="" className={`h-full rounded-lg resize-none px-4 py-3 text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary focus:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} placeholder="Digite seu texto..."></textarea>
                        <div className="flex justify-center mb-8">
                            <input type="submit" className={`${darkModeCtx?.darkMode == true ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} font-semibold w-40 py-3 rounded-lg shadow-lg hover:bg-primary hover:shadow-xl hover:scale-105 transition-all duration-300`}/>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col lg:flex-row mt-20 justify-center lg:hidden">
                    
                    <form action="" className="flex-1 flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <input type="text" className={`flex-1 rounded-lg px-4 py-3 text-sm sm:text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} placeholder="Digite seu nome..."/>
                            <input type="email" className={`flex-1 rounded-lg px-4 py-3 text-sm sm:text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} placeholder="Digite seu Gmail..."/>
                        </div>
                        <textarea name="" id="" className={`h-full rounded-lg resize-none px-4 py-3 text-sm sm:text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary focus:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} placeholder="Digite seu texto..."></textarea>
                        <div className="flex justify-center mb-8">
                            <input type="submit" className={`${darkModeCtx?.darkMode == true ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} font-semibold w-40 py-3 rounded-lg shadow-lg hover:bg-primary hover:shadow-xl hover:scale-105 transition-all duration-300`}/>
                        </div>
                    </form>
                    <div className="flex mt-10 lg:flex-col justify-center gap-6 sm:gap-10 text-primary flex-1">
                        <ContactIcon icon={<FaWhatsapp className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon icon={<FaLinkedin className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon icon={<SiGmail className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon icon={<FaPhoneSquareAlt className='hover:scale-125 transition-all duration-300'/>}/>
                    </div>
                </div>
            </div>
        </section>
    )
}