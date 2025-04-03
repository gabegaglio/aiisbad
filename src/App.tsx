import Wizard from "./components/Wizard.tsx";
import Archer from "./components/Archer.tsx";
import CharacterCreation from "./components/CharacterCreation.tsx";
import JazzSong from "./components/JazzSong.tsx";
import Einstein from "./components/Einstein.tsx";
import PromptSection from "./components/PromptSection.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="w-screen h-screen flex items-center justify-center bg-black py-6 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono">AI isn't so great</h1>
          <p className="text-gray-400 mt-2">
            Collection of fields AI is destroying
          </p>
        </div>
      </header>

      <main>
        <Wizard />
        <Archer />
        <CharacterCreation />
        <Einstein />
        <JazzSong />
        <PromptSection />
      </main>

      <footer className="bg-black text-gray-500 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>All content AI generated.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
