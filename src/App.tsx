import { Profile } from "./components/custom/Profile";
import { TimeLine } from "./components/custom/TimeLine";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white w-full">
      <div className="mx-auto w-3/4">
        <TimeLine />
      </div>
    </div>
  );
};


export default App;