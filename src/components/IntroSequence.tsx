import { useEffect, useState } from "react";

interface Props {
  onContinue: () => void;
  notation: "symbolic" | "electronic";
}

const messages = [
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

const IntroSequence = ({ onContinue, notation }: Props) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < messages.length) {
      const timer = setTimeout(() => setCurrentLine(currentLine + 1), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex flex-col justify-center items-start">
      {messages.slice(0, currentLine).map((line, index) => (
        <p key={index} className="mb-2">{line}</p>
      ))}

      {currentLine === messages.length && (
        <button
          onClick={onContinue}
          className="mt-8 px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded"
        >
          [ Access Gate Controls ]
        </button>
      )}
    </div>
  );
};

export default IntroSequence;
