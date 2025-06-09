import { useState } from "react";
import NotationSelector from "./components/NotationSelector";
import IntroSequence from "./components/IntroSequence";
import GatePuzzle1 from "./components/GatePuzzle1";
import PostPuzzle1Scene from "./components/PostPuzzle1Scene";
import GatePuzzle2 from "./components/GatePuzzle2"; // ✅ NEW import

function App() {
  const [notation, setNotation] = useState<"symbolic" | "electronic" | null>(null);
  const [stage, setStage] = useState<"select" | "intro" | "puzzle1" | "postPuzzle1" | "puzzle2">("select");
  const [isGregFriend, setIsGregFriend] = useState<boolean | null>(null); // 🐊 Track Greg friendship

  const handleNotationSelect = (chosen: "symbolic" | "electronic") => {
    setNotation(chosen);
    setStage("intro");
  };

  const goToPuzzle = () => setStage("puzzle1");

  return (
    <>
      {stage === "select" && (
        <NotationSelector onSelect={handleNotationSelect} />
      )}

      {stage === "intro" && notation && (
        <IntroSequence onContinue={goToPuzzle} notation={notation} />
      )}

      {stage === "puzzle1" && (
        <GatePuzzle1
          onSolve={() => setStage("postPuzzle1")}
          notation={notation!}
        />
      )}

      {stage === "postPuzzle1" && (
        <PostPuzzle1Scene
          onContinue={() => setStage("puzzle2")}
          setIsGregFriend={setIsGregFriend}
        />
      )}

      {stage === "puzzle2" && (
        <GatePuzzle2
          onSolve={() => {
            alert("Gate 2 unlocked! More gates coming soon.");
            // Future: setStage("postPuzzle2");
          }}
          notation={notation!}
        />
      )}
    </>
  );
}

export default App;
