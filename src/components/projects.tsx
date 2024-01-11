import { Project1 } from "./project1"
import { Project2 } from "./project2"

export const Projects = ()=> {
    return(
        <section id="projects" className="w-creen h-full px-20 flex flex-col justify-center mb-20 pt-16 gap-20">
            <div className="mb-0">
                <h1 className="text-7xl inline-block pb-6 font-bold">Projetos</h1>
                <div className="w-52 border-b-4 border-primary"></div>
            </div>

            <Project2 site="" title="Projeto 1" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." src="https://i.im.ge/2024/01/11/3Ei6zP.image.png"/>


            <Project1 site="https://country-website-react.netlify.app" title="Projeto 2" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." src="https://i.im.ge/2024/01/11/3EhDgW.image.png"/>
            
            <Project2 site="https://web-template-react.netlify.app" title="Projeto 3" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." src="https://i.im.ge/2024/01/11/3EikYz.43ab134a-b84b-4ca7-97d1-cd2fcd7d396f.jpg"/>

            <Project1 site="https://imccalculator-react.netlify.app" title="Projeto 4" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." src="https://i.im.ge/2024/01/11/3Eibsc.image.png"/>

        </section>
    )
}