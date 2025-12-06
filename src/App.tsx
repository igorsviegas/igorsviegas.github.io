import { Profile } from "./components/custom/Profile";
import { TimeLine } from "./components/custom/TimeLine";

import type { ITimeline } from "./interfaces/ITimeline";

function App() {
  const timeline: ITimeline[] = [];

  return (
    <div className="bg-gray-950 min-h-screen text-white w-full">
      <div className="mx-auto w-3/4">
        <TimeLine timeline={ timeline } title="Teste" />
      </div>
    </div>
  );
};


export default App;