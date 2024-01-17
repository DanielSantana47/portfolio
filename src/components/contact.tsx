import { Title } from "./title"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ContactIcon } from "./contactIcon";
import { useContext, useRef, useState } from "react";
import { DarkMode } from "@/context/darkMode";
import { useInView } from "framer-motion";
import emailjs from '@emailjs/browser'

export const Contact = ()=> {
    const darkModeCtx = useContext(DarkMode)
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e: any)=> {
        e.preventDefault()
        
        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos')
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_4z8s3q1', 'template_wfu9abt', templateParams, 'LveT681b1HPuCDemW')
        .then(()=> {
            setName('')
            setEmail('')
            setMessage('')
        })
    }
    return(
        <section 
        id="contact" className="w-creen h-full flex flex-col justify-center items-center p-5">
            <div
            className="max-w-[1450px] w-full h-full flex flex-col justify-center">
                <Title label="Contato"/>
                <div className="mt-20 h-full justify-center lg:flex hidden">
                    <div className="flex mb-10 lg:mb-0 lg:flex-col justify-center gap-12 text-primary flex-1">
                        <ContactIcon link="https://wa.me/5581987778016" icon={<FaWhatsapp className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon link="https://www.linkedin.com/in/daniel-santana-5647792aa/" icon={<FaLinkedin className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon link="mailto:danielsantanachastel@hotmail.com" icon={<SiGmail className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon link="tel:+5581987778016" icon={<FaPhoneSquareAlt className='hover:scale-125 transition-all duration-300'/>}/>
                    </div>
                    <form
                    onSubmit={sendEmail}
                    action="" 
                    className="flex-1 flex flex-col gap-4">
                        <div
                        className="flex gap-8">
                            <input 
                            type="text" 
                            className={`flex-1 rounded-lg px-4 py-3 text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`}
                            placeholder="Digite seu nome..."
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                            />
                            
                            <input
                            type="email"
                            className={`flex-1 rounded-lg px-4 py-3 text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`}
                            placeholder="Digite seu Gmail..."
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                        <textarea
                        name="" 
                        className={`h-full rounded-lg resize-none px-4 py-3 text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary focus:border hover:border-primary focus:border-primary outline-none transition-all duration-500`}
                        placeholder="Digite seu texto..."
                        onChange={(e)=>setMessage(e.target.value)}
                        value={message}
                        >
                            
                        </textarea>
                        <div className="flex justify-center mb-8">
                            <input type="submit" className={`${darkModeCtx?.darkMode == true ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} font-semibold w-40 py-3 rounded-lg shadow-lg hover:bg-primary hover:shadow-xl hover:scale-105 transition-all duration-300`}/>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col lg:flex-row mt-20 justify-center lg:hidden">
                    
                    <form
                    onSubmit={sendEmail}
                    ref={ref}
                    style={{
                    transform: isInView ? "none" : "translatex(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"
                    }} 
                    action="" 
                    className="flex-1 flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <input 
                            type="text" 
                            className={`flex-1 rounded-lg px-4 py-3 text-sm sm:text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} 
                            placeholder="Digite seu nome..."
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                            />

                            <input 
                            type="email" 
                            className={`flex-1 rounded-lg px-4 py-3 text-sm sm:text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary hover:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} 
                            placeholder="Digite seu Gmail..."
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                        <textarea 
                        className={`h-full rounded-lg resize-none px-4 py-3 text-sm sm:text-xl ${darkModeCtx?.darkMode == true ? 'bg-white' : 'bg-zinc-700 border-zinc-600 text-white'} border border-zinc-200 text-primary focus:border hover:border-primary focus:border-primary outline-none transition-all duration-500`} 
                        placeholder="Digite seu texto..."
                        onChange={(e)=>setMessage(e.target.value)}
                        value={message}
                        ></textarea>
                        <div className="flex justify-center mb-8">
                            <input type="submit" className={`${darkModeCtx?.darkMode == true ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black hover:text-white'} font-semibold w-40 py-3 rounded-lg shadow-lg hover:bg-primary hover:shadow-xl hover:scale-105 transition-all duration-300`}/>
                        </div>
                    </form>
                    <div className="flex mt-10 lg:flex-col justify-center gap-6 sm:gap-10 text-primary flex-1">
                        <ContactIcon link="https://wa.me/5581987778016" icon={<FaWhatsapp className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon link="https://www.linkedin.com/in/daniel-santana-5647792aa/" icon={<FaLinkedin className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon link="mailto:danielsantanachastel@hotmail.com" icon={<SiGmail className='hover:scale-125 transition-all duration-300'/>}/>
                        <ContactIcon link="tel:+5581987778016" icon={<FaPhoneSquareAlt className='hover:scale-125 transition-all duration-300'/>}/>
                    </div>
                </div>
            </div>
        </section>
    )
}