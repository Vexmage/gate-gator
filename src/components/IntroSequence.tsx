import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface Props {
  onContinue: () => void;
  notation: "symbolic" | "electronic";
}

const gateMessages = [
  "......booting...",
  "++ SYSTEM ERROR ++",
  "[GateGator: vX.3.9] ::: core logic processor damaged :::",
  "You. You there.",
  "Can... can you hear?",
  "This gate... locked.",
  "Need help... please, logic... logic...",
  "Symbolic? Electronic? Doesn’t... matter.",
  "Gate... controls... *your* cell.",
  "Solve it — before it’s... too late."
];

const playerText = `You awaken in a sparse cell room. Peering through the bars is a strange humanoid gator,
his form flickering slightly, as though part of him isn't quite here. The floor is cold and damp. 
Before you lies a control panel — a puzzle you don’t recognize... but know you must solve.`;

const IntroSequence = ({ onContinue, notation }: Props) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showNarration, setShowNarration] = useState(false);

  const animatedLine = useTypewriter(gateMessages[currentLine] ?? "", 30);

  useEffect(() => {
    if (currentLine < gateMessages.length) {
      const delay = gateMessages[currentLine].length * 30 + 500; // delay based on text length
      const timer = setTimeout(() => setCurrentLine(currentLine + 1), delay);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowNarration(true), 500);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex flex-row justify-between items-start gap-8">
      {/* GateGator terminal log */}
      <div className="w-1/2 max-w-xl">
        {gateMessages.slice(0, currentLine).map((line, i) => (
          <p key={i} className="mb-2">{line}</p>
        ))}
        {currentLine < gateMessages.length && (
          <p className="mb-2">{animatedLine}</p>
        )}
      </div>

      {/* Player perspective block */}
      {showNarration && (
        <div className="w-1/2 max-w-md text-white font-sans text-lg bg-gray-900 bg-opacity-70 p-6 rounded shadow-md mt-32">
          <p className="mb-6 whitespace-pre-line">{playerText}</p>
          <button
            onClick={onContinue}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
          >
            Access Gate Controls
          </button>
        </div>
      )}
    </div>
  );
};



export default IntroSequence;
