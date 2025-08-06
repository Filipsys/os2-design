import { Desktop } from "./components/Desktop";
import "./index.css";

function App() {
  return (
    <div className="h-dvh w-full flex flex-col gap-4 justify-center items-center bg-slate-500">
      <img
        src="oswarp.png"
        alt="oswarp-logo"
        className="h-24 drop-shadow-md drop-shadow-black"
      />

      <Desktop />
    </div>
  );
}

export default App;
