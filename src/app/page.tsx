import { Header } from "@/components/header"
import { Nav } from "@/components/nav"
import { Techs } from "@/components/tecnologies"

const Page = ()=> {
  return(
    <div className="overflow-x-hidden">
      <Nav/>
      <Header/>
      <Techs/>
    </div>
  )
}

export default Page