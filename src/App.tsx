import { academic } from "./data/academic";
import { Button } from "./components/ui/button";
import { professional } from "./data/professional";
import { Profile } from "./components/custom/Profile";
import { profile } from "./data/profile";
import { RiArrowUpSLine } from "react-icons/ri";
import { Skills } from "./components/custom/Skills";
import { skills } from "./data/skills";
import { Timeline } from "./components/custom/TimeLine";
import { Footer } from "./components/custom/Footer";


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
        <Profile data={ profile } />
        <Timeline data={ professional } title="Linha do tempo profissional" />
        <Timeline data={ academic } title="Linha do tempo acadêmica" />
        <Skills data={ skills } title="Habilidades/conhecimentos" />
        <Footer />
        <Button className="bottom-5 cursor-pointer fixed right-5 z-50" onClick={ handleUp } size="sm" variant="secondary">
          <RiArrowUpSLine />
        </Button>
      </div>
    </div>
  );
};


export default App;