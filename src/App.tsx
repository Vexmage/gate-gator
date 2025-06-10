import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import AboutPage from "./components/AboutPage";
import NotationSelector from "./components/NotationSelector";
import IntroSequence from "./components/IntroSequence";
import GatePuzzle1 from "./components/GatePuzzle1";
import PostPuzzle1Scene from "./components/PostPuzzle1Scene";
import GatePuzzle2 from "./components/GatePuzzle2";
import PostPuzzle2Scene from "./components/PostPuzzle2Scene";
import GatePuzzle3 from "./components/GatePuzzle3";
import PostPuzzle3Scene from "./components/PostPuzzle3Scene";
import GatePuzzle4 from "./components/GatePuzzle4";
import PostPuzzle4Scene from "./components/PostPuzzle4Scene";
import GatePuzzle5 from "./components/GatePuzzle5";
import PostPuzzle5Scene from "./components/PostPuzzle5Scene";
import GatePuzzle6 from "./components/GatePuzzle6";
import PostPuzzle6Scene from "./components/PostPuzzle6Scene";
import GatePuzzle7 from "./components/GatePuzzle7";
import PostPuzzle7Scene from "./components/PostPuzzle7Scene";
import GatePuzzle8 from "./components/GatePuzzle8";

function App() {
  const [notation, setNotation] = useState<"symbolic" | "electronic" | null>(null);
  const [stage, setStage] = useState<
    | "introScreen"
    | "about"
    | "select"
    | "intro"
    | "puzzle1"
    | "postPuzzle1"
    | "puzzle2"
    | "postPuzzle2"
    | "puzzle3"
    | "postPuzzle3"
    | "puzzle4"
    | "postPuzzle4"
    | "puzzle5"
    | "postPuzzle5"
    | "puzzle6"
    | "postPuzzle6"
    | "puzzle7"
    | "postPuzzle7"
    | "unknownPath"
    | "puzzle8"
  >("introScreen");

  const [isGregFriend, setIsGregFriend] = useState<boolean | null>(null);
  const [doorBUnlocked, setDoorBUnlocked] = useState(false);

  const handleNotationSelect = (chosen: "symbolic" | "electronic") => {
    setNotation(chosen);
    setStage("intro");
  };

  return (
    <>
      {stage === "introScreen" && (
        <IntroScreen onStart={() => setStage("select")} onAbout={() => setStage("about")} />
      )}

      {stage === "about" && <AboutPage onContinue={() => setStage("select")} />}

      {stage === "select" && <NotationSelector onSelect={handleNotationSelect} />}

      {stage === "intro" && notation && (
        <IntroSequence onContinue={() => setStage("puzzle1")} notation={notation} />
      )}

      {stage === "puzzle1" && (
        <GatePuzzle1 onSolve={() => setStage("postPuzzle1")} notation={notation!} />
      )}

      {stage === "postPuzzle1" && (
        <PostPuzzle1Scene
          onContinue={() => setStage("puzzle2")}
          setIsGregFriend={setIsGregFriend}
        />
      )}

      {stage === "puzzle2" && (
        <GatePuzzle2 onSolve={() => setStage("postPuzzle2")} notation={notation!} />
      )}

      {stage === "postPuzzle2" && (
        <PostPuzzle2Scene
          doorBUnlocked={doorBUnlocked}
          onChoosePath={(path) => {
            if (path === "logic") {
              if (doorBUnlocked) return; // logic path already done
              setStage("puzzle3");
            } else if (path === "unknown" && doorBUnlocked) {
              setStage("puzzle7");
            }

          }}
        />
      )}

      {stage === "puzzle3" && (
        <GatePuzzle3 onSolve={() => setStage("postPuzzle3")} notation={notation!} />
      )}

      {stage === "postPuzzle3" && (
        <PostPuzzle3Scene
          onContinue={() => setStage("puzzle4")}
          isGregFriend={isGregFriend}
        />
      )}

      {stage === "puzzle4" && (
        <GatePuzzle4 onSolve={() => setStage("postPuzzle4")} notation={notation!} />
      )}

      {stage === "postPuzzle4" && <PostPuzzle4Scene onContinue={() => setStage("puzzle5")} />}

      {stage === "puzzle5" && (
        <GatePuzzle5 onSolve={() => setStage("postPuzzle5")} notation={notation!} />
      )}

      {stage === "postPuzzle5" && <PostPuzzle5Scene onContinue={() => setStage("puzzle6")} />}

      {stage === "puzzle6" && (
        <GatePuzzle6 onSolve={() => setStage("postPuzzle6")} notation={notation!} />
      )}

      {stage === "postPuzzle6" && (
        <PostPuzzle6Scene
          isGregFriend={isGregFriend}
          onContinue={() => {
            setDoorBUnlocked(true);
            setStage("postPuzzle2");
          }}
        />
      )}

      {stage === "puzzle7" && (
  <GatePuzzle7 onSolve={() => setStage("postPuzzle7")} notation={notation!} />
)}

{stage === "postPuzzle7" && (
  <PostPuzzle7Scene onContinue={() => setStage("puzzle8")} />
)}


{stage === "puzzle8" && (
  <GatePuzzle8 onSolve={() => setStage("unknownPath")} notation={notation!} />
)}

      {stage === "unknownPath" && (
        <div className="min-h-screen bg-black text-yellow-300 flex items-center justify-center font-mono p-8 text-center">
          <p>You step through Door B... something shifts in the air. (Next puzzles coming soon)</p>
        </div>
      )}
    </>
  );
}

export default App;
