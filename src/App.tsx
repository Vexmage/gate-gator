import { useState } from "react";
import NotationSelector from "./components/NotationSelector";
import IntroSequence from "./components/IntroSequence";

function App() {
  const [notation, setNotation] = useState<"symbolic" | "electronic" | null>(null);
  const [stage, setStage] = useState<"select" | "intro" | "puzzle1">("select");

  const handleNotationSelect = (chosen: "symbolic" | "electronic") => {
    setNotation(chosen);
    setStage("intro");
  };

  const goToPuzzle = () => setStage("puzzle1");

  return (
    <>
      {stage === "select" && <NotationSelector onSelect={handleNotationSelect} />}
      {stage === "intro" && notation && <IntroSequence onContinue={goToPuzzle} notation={notation} />}
      {stage === "puzzle1" && (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
          <h1>First Logic Puzzle Goes Here</h1>
        </div>
      )}
    </>
  );
}

export default App;
