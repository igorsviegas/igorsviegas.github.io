import { Profile } from "./components/custom/Profile";
import { Skills } from "./components/custom/Skills";
import { Timeline } from "./components/custom/Timeline";

import type { ITimeline } from "./interfaces/ITimeline";

function App() {
  const timeline: ITimeline[] = [];

  return (
    <div className="bg-gray-950 min-h-screen text-white w-full">
      <div className="mx-auto w-3/4">
        <Skills></Skills>
      </div>
    </div>
  );
};


export default App;