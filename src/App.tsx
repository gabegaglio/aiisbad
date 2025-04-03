import Wizard from "./components/Wizard";
import Archer from "./components/Archer";
import CharacterCreation from "./components/CharacterCreation";
import JazzSong from "./components/JazzSong";
import Einstein from "./components/Einstein";
import PromptSection from "./components/PromptSection";

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
