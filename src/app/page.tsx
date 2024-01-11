import { Header } from "@/components/header"
import { Nav } from "@/components/nav"
import { Projects } from "@/components/projects"
import { Techs } from "@/components/tecnologies"

const Page = ()=> {
  return(
    <div className="overflow-x-hidden">
      <Nav/>
      <Header/>
      <Techs/>
      <Projects/>
    </div>
  )
}

export default Page