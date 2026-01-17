
import { Button } from "./components/ui/button";
import { Footer } from "./components/custom/Footer";
import { Profile } from "./components/custom/Profile";
import { Projects } from "./components/custom/Projects";
import { Skills } from "./components/custom/Skills";
import { Timeline } from "./components/custom/TimeLine";

import { academic } from "./data/academic";
import { privateProjects } from "./data/private";
import { professional } from "./data/professional";
import { profile } from "./data/profile";
import { publicProjects } from "./data/public";
import { skills } from "./data/skills";

import { RiArrowUpSLine } from "react-icons/ri";


function App() {
  const handleUp = () => {
    window.scrollTo({
      behavior: "smooth",
      top     : 0
    });
  };
  
  
  return (
    <div className="min-h-screen select-none text-white w-full">
      <div className="h-screen mx-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-7/12">
        <Profile
          data={ profile }
        />

        <Timeline
          data={ professional }
          title="Linha do tempo profissional"
        />

        <Timeline
          data={ academic }
          title="Linha do tempo acadêmica"
        />

        <Projects
          data={ privateProjects }
          description="Aplicações privadas desenvolvidas para empresas e uso interno. Os projetos são descritos de forma resumida, sem exposição de código ou interfaces, em respeito à confidencialidade."
          title="Projetos privados"
        />

        <Projects
          data={ publicProjects }
          title="Projetos públicos"
        />
        
        <Skills
          data={ skills }
          title="Habilidades/conhecimentos"
        />

        <Footer />

        <Button
          className="bottom-5 cursor-pointer fixed right-5 z-50"
          onClick={ handleUp }
          size="sm"
          variant="secondary"
        >
          <RiArrowUpSLine />
        </Button>
      </div>
    </div>
  );
};


export default App;