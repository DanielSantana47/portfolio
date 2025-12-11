import { TechBox } from "./techBox"
import { Title } from "./title";
import { technologiesData } from "@/data/technologies";

export const Techs = ()=> {
    return(
        <section id="technologies" className="w-creen h-full p-5 flex flex-col justify-center items-center mb-20 pt-16">
            <div className="max-w-[1450px] w-full flex flex-col justify-start">
                <Title label="Tecnologias"/>            
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full items-center justify-center mt-20">
                    {technologiesData.map((item)=> ((
                        <TechBox 
                            id={item.id}
                            label={item.label}
                            icon={item.icon}
                        />
                    )))}
                </div>
            </div>
        </section>
    )
}