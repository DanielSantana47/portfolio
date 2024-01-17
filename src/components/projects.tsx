import { Project1 } from "./project1"
import { Project2 } from "./project2"
import { Title } from "./title"

export const Projects = ()=> {
    return(
        <section id="projects" className="w-full h-full flex flex-col justify-center items-center mb-20 pt-16 p-5">
            <div className="max-w-[1450px] w-full flex flex-col justify-start">
                <Title label="Projetos"/> 
                <div className="w-creen h-full flex-col justify-center items-stretch mb-20 pt-16 gap-16 hidden xl:flex">
                    <Project2 blockCode={true} site="https://flexsolucoes.com" title="Site corporativo" body="Trabalho realizado como freelancer para uma empresa do Rio de janeito do setor financeiro, com o propósito de promover seus serviços por meio de um website. O objetivo era ampliar as opções de comunicação e aprimorar a experiência dos clientes." src="https://i.im.ge/2024/01/11/3Ei6zP.image.png"/>

                    <Project1 code="https://github.com/DanielSantana47/hiking-website" site="https://web-template-react.netlify.app" title="Guia para trilhas" body="Iniciativa pessoal criada com o propósito de aperfeiçoar as competências no campo do desenvolvimento de páginas web, focando tanto no aspecto de front-end quanto na responsividade, com o objetivo de proporcionar uma experiência de usuário de alta qualidade." src="https://i.im.ge/2024/01/11/3EikYz.43ab134a-b84b-4ca7-97d1-cd2fcd7d396f.jpg"/>
                    
                    <Project2 code="https://github.com/DanielSantana47/web-page" site="https://template-react-ts.netlify.app" title="Portfolio de Design" body="
                    Iniciativa pessoal empreendida com o objetivo de aprimorar a elaboração de portfólios, aperfeiçoar habilidades no desenvolvimento front-end, garantir responsividade e aprimorar a experiência do usuário." src="https://i.im.ge/2024/01/14/3kx9MF.image.png"/>

                    <Project1 code="https://github.com/DanielSantana47/country-website" site="https://country-website-react.netlify.app" title="Guia de países" body="Projeto pessoal realizado para a criação de uma interface amigável, cujo propósito é simplificar a busca por informações sobre países e territórios globalmente. O foco é proporcionar uma excelente experiência ao usuário, integrando-se de maneira eficaz a serviços externos." src="https://i.im.ge/2024/01/11/3EhDgW.image.png"/>
                </div>

                <div className="w-creen h-full flex-col justify-center items-stretch mb-20 pt-16 gap-16 flex xl:hidden">
                    <Project2 blockCode={true} site="https://flexsolucoes.com" title="Site corporativo" body="Trabalho realizado como freelancer para uma empresa do Rio de janeito do setor financeiro, com o propósito de promover seus serviços por meio de um website. O objetivo era ampliar as opções de comunicação e aprimorar a experiência dos clientes." src="https://i.im.ge/2024/01/11/3Ei6zP.image.png"/>

                    <Project2 code="https://github.com/DanielSantana47/hiking-website" site="https://web-template-react.netlify.app" title="Guia para trilhas" body="Projeto independente criado com o propósito de aperfeiçoar as competências no campo do desenvolvimento de páginas web, focando tanto no aspecto de front-end quanto na responsividade, com o objetivo de proporcionar uma experiência de usuário de alta qualidade." src="https://i.im.ge/2024/01/11/3EikYz.43ab134a-b84b-4ca7-97d1-cd2fcd7d396f.jpg"/>
                    
                    <Project2 code="https://github.com/DanielSantana47/web-page" site="https://template-react-ts.netlify.app" title="Portfolio de Design" body="Iniciativa pessoal feita com o objetivo de aprimorar a elaboração de portfólios, aperfeiçoar habilidades no desenvolvimento front-end, garantir responsividade e aprimorar a experiência do usuário." src="https://i.im.ge/2024/01/14/3kx9MF.image.png"/>

                    <Project2 code="https://github.com/DanielSantana47/hiking-website" site="https://country-website-react.netlify.app" title="Guia de países" body="Projeto pessoal realizado para a criação de uma interface amigável, cujo propósito é simplificar a busca por informações sobre países e territórios globalmente. O foco é proporcionar uma excelente experiência ao usuário, integrando-se de maneira eficaz a serviços externos." src="https://i.im.ge/2024/01/11/3EhDgW.image.png"/>
                </div>
            </div>
        </section>
    )
}