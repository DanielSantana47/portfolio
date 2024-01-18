'use client'

import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Nav } from "@/components/nav"
import { Projects } from "@/components/projects"
import { Techs } from "@/components/tecnologies"
import { DarkMode, DarkModeProvider } from "@/context/darkMode"
import { useContext } from "react"

const Page = ()=> {
  const darkModeCtx = useContext(DarkMode)
  return(
    <div className={`overflow-x-hidden ${darkModeCtx?.darkMode == true && darkModeCtx.darkMode !== null ? 'bg-zinc-100 text-black' : 'bg-zinc-900 text-white'} transition-all duration-300`}>
      <Nav/>
      <Header/>
      <Techs/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Page