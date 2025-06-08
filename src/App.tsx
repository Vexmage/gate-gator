import { useState } from "react";
import NotationSelector from "./components/NotationSelector";
import IntroSequence from "./components/IntroSequence";
import GatePuzzle1 from "./components/GatePuzzle1";
import PostPuzzle1Scene from "./components/PostPuzzle1Scene"; // ✅ This import was missing

function App() {
  const [notation, setNotation] = useState<"symbolic" | "electronic" | null>(null);
  const [stage, setStage] = useState<"select" | "intro" | "puzzle1" | "postPuzzle1" | "puzzle2">("select");

  const handleNotationSelect = (chosen: "symbolic" | "electronic") => {
    setNotation(chosen);
    setStage("intro");
  };

  const goToPuzzle = () => setStage("puzzle1");

  return (
    <>
      {stage === "select" && <NotationSelector onSelect={handleNotationSelect} />}
      {stage === "intro" && notation && <IntroSequence onContinue={goToPuzzle} notation={notation} />}
      {stage === "puzzle1" && <GatePuzzle1 onSolve={() => setStage("postPuzzle1")} />}
      {stage === "postPuzzle1" && <PostPuzzle1Scene onContinue={() => setStage("puzzle2")} />}
      {stage === "puzzle2" && (
        <div className="min-h-screen bg-gray-800 text-white flex justify-center items-center">
          <h1>Coming soon: Logic Puzzle 2</h1>
        </div>
      )}
    </>
  );
}

export default App;
