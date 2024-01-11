import { Title } from "./title"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ContactIcon } from "./contactIcon";

export const Contact = ()=> {
    return(
        <section  id="contact" className="w-creen h-full px-52 flex flex-col mb-20 pt-16">
            <Title label="Contato"/>
            <div className="flex mt-20 justify-center">
                <div className="flex flex-col gap-12 text-primary flex-1">
                    <ContactIcon icon={<FaWhatsapp className='text-5xl hover:scale-125 transition-all duration-300'/>}/>
                    <ContactIcon icon={<FaLinkedin className='text-5xl hover:scale-125 transition-all duration-300'/>}/>
                    <ContactIcon icon={<SiGmail className='text-5xl hover:scale-125 transition-all duration-300'/>}/>
                    <ContactIcon icon={<FaPhoneSquareAlt className='text-5xl hover:scale-125 transition-all duration-300'/>}/>
                </div>
                <form action="" className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-8">
                        <input type="text" className="flex-1 rounded-lg px-4 py-3 text-xl border border-zinc-200 text-primary focus:border focus:border-primary outline-none transition-all duration-500" placeholder="Digite seu nome..."/>
                        <input type="text"  className="flex-1 rounded-lg px-4 py-3 text-xl border border-zinc-200 text-primary focus:border focus:border-primary outline-none transition-all duration-500" placeholder="Digite seu Gmail..."/>
                    </div>
                    <textarea name="" id="" className="h-full rounded-lg resize-none px-4 py-3 text-xl border border-zinc-200 text-primary focus:border focus:border-primary outline-none transition-all duration-500" placeholder="Digite seu texto..."></textarea>
                    <div className="flex justify-center mb-8">
                        <input type="submit" className="bg-zinc-800 text-white w-40 py-3 rounded-lg shadow-lg hover:bg-primary hover:shadow-xl hover:scale-105 transition-all duration-300"/>
                    </div>
                </form>
            </div>
        </section>
    )
}