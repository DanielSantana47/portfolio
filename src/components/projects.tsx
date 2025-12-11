import { projectsData } from "@/data/projects"
import { ProjectLg } from "./projectLg"
import { ProjectSm } from "./projectSm"
import { Title } from "./title"

export const Projects = ()=> {
    return(
        <section id="projects" className="w-full h-full flex flex-col justify-center items-center mb-20 pt-16 p-5">
            <div className="max-w-[1450px] w-full flex flex-col justify-start">
                <Title label="Projetos"/> 
                <div className="w-creen h-full flex-col justify-center items-stretch mb-20 pt-16 gap-16 hidden xl:flex">
                    {projectsData.map((item)=> ((
                        <ProjectLg 
                            id={item.id} 
                            title={item.title} 
                            body={item.body} 
                            src={item.src} 
                            site={item.site} 
                            code={item.code} 
                            blockCode={item.blockCode}
                            techs={item.techs}
                        />
                    )))}
                </div>

                <div className="w-creen h-full flex-col justify-center items-stretch mb-20 pt-16 gap-16 flex xl:hidden">
                    {projectsData.map((item)=> ((
                        <ProjectSm 
                            id={item.id} 
                            title={item.title} 
                            body={item.body} 
                            src={item.src} 
                            site={item.site} 
                            code={item.code} 
                            blockCode={item.blockCode}
                            techs={item.techs}
                        />
                    )))}
                </div>
            </div>
        </section>
    )
}