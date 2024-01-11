import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Nav } from "@/components/nav"
import { Projects } from "@/components/projects"
import { Techs } from "@/components/tecnologies"

const Page = ()=> {
  return(
    <div className="overflow-x-hidden bg-zinc-100">
      <Nav/>
      <Header/>
      <Techs/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Page