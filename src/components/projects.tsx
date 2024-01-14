import { Project1 } from "./project1"
import { Project2 } from "./project2"
import { Title } from "./title"

export const Projects = ()=> {
    return(
        <section id="projects" className="w-full h-full flex flex-col justify-center items-center mb-20 pt-16 p-5">
            <div className="max-w-[1450px] w-full flex flex-col justify-start">
                <Title label="Projetos"/> 
                <div className="w-creen h-full flex-col justify-center items-stretch mb-20 pt-16 gap-16 hidden xl:flex">
                    <Project2 blockCode={true} site="https://flexsolucoes.com" title="Projeto 1" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/11/3Ei6zP.image.png"/>

                    <Project1 code="https://github.com/DanielSantana47/hiking-website" site="https://web-template-react.netlify.app" title="Projeto 3" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/11/3EikYz.43ab134a-b84b-4ca7-97d1-cd2fcd7d396f.jpg"/>
                    
                    <Project2 code="https://github.com/DanielSantana47/web-page" site="https://template-react-ts.netlify.app" title="Projeto 4" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/14/3kx9MF.image.png"/>

                    <Project1 code="https://github.com/DanielSantana47/country-website" site="https://country-website-react.netlify.app" title="Projeto 2" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/11/3EhDgW.image.png"/>
                </div>

                <div className="w-creen h-full flex-col justify-center items-stretch mb-20 pt-16 gap-16 flex xl:hidden">
                    <Project2 blockCode={true} site="https://flexsolucoes.com" title="Projeto 1" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/11/3Ei6zP.image.png"/>

                    <Project2 code="https://github.com/DanielSantana47/hiking-website" site="https://web-template-react.netlify.app" title="Projeto 3" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/11/3EikYz.43ab134a-b84b-4ca7-97d1-cd2fcd7d396f.jpg"/>
                    
                    <Project2 code="https://github.com/DanielSantana47/web-page" site="https://template-react-ts.netlify.app" title="Projeto 4" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/14/3kx9MF.image.png"/>

                    <Project2 code="https://github.com/DanielSantana47/hiking-website" site="https://country-website-react.netlify.app" title="Projeto 2" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." src="https://i.im.ge/2024/01/11/3EhDgW.image.png"/>
                </div>
            </div>
        </section>
    )
}