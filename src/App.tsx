import { Profile } from "./components/custom/Profile";
import { Skills } from "./components/custom/Skills";
import { Timeline } from "./components/custom/Timeline";

import type { ISkills } from "./interfaces/ISkills";
import type { ITimeline } from "./interfaces/ITimeline";

function App() {
  const academicTimeline: ITimeline[] = [
    {
      description: "Formação em Ciências da Computação pela instituição de ensino Estácio S.A.",
      period: "2022 - 2025",
      title: "Ciências da computação"
    },
    {
      description: "Estudo geral sobre interfaces de usuário e comportamentos na web por meio de cursos da " +
                   "plataforma Udemy",
      period: "2020 - 2021",
      title: "Interface de usuário na Web"
    },
    {
      description: "Especialização em desenvolvimento Web por meio de cursos da plataforma Udemy",
      period: "2020 - 2020",
      title: "Desenvolvimento Web"
    },
    {
      description: "Especialização na língua inglesa pela instituição de ensino Microlins",
      period: "2016 - 2017",
      title: "Língua inglesa"
    }
  ];

  const professionalTimeline: ITimeline[] = [
    {
      description: "Desenvolvedor desde 2023, especializado em aplicações Desktop, Web e serviços utilizando .NET, " +
                   "com experiência no desenvolvimento de APIs e interfaces Web utilizando Node.js e Vue.js",
      period: "2023 - Atualmente",
      title: "Infocerta Informática LTDA"
    },
    {
      description: "Desde 2023, atuando no desenvolvimento, manutenção e suporte de uma plataforma Web voltada a " +
                   "consultas online, aquisição de exames e prestação de serviços na área da saúde",
      period: "2023 - Atualmente",
      title: "Saúde Livre Online"
    }
  ];

  const skills: ISkills[] = [
    {
      items: ["C# (principal)", "JavaScript", "Python"],
      name: "Linguagens de programação"
    },
    {
      items: ["Firebird", "Postgres"],
      name: "SGBDs"
    },
    {
      items: ["Canva", "Figma", "IAs em geral"],
      name: "Ferramentas"
    }
  ];


  return (
    <div className="min-h-screen text-white w-full">
      <div className="h-screen mx-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-7/12">
        <div className="h-[85%]">
          <Profile />
        </div>
        
        <Timeline timeline={ professionalTimeline } title="Linha do tempo profissional" />
        <Timeline timeline={ academicTimeline } title="Linha do tempo acadêmica" />
        <Skills skills={ skills } title="Habilidades/conhecimentos" />
      </div>
    </div>
  );
};


export default App;