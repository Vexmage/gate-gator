import { useState } from "react";

interface Props {
  onSolve: () => void;
  notation: "symbolic" | "electronic";
}

const GatePuzzle6 = ({ onSolve, notation }: Props) => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  const output = (inputA && inputB) || (!inputA && !inputB); // XNOR logic

  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col items-center justify-center p-8 tracking-wide">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 border-b border-lime-500 pb-2">
        Logic Puzzle 6: XNOR Gate
      </h1>

      <div className="mb-6 text-center max-w-xl">
        <p className="mb-2">
          To unlock this gate, the inputs must be <strong>equal</strong>: both <code>true</code> or both <code>false</code>.
        </p>
        <p>
          The gate uses a{" "}
          <code className="text-lime-400">XNOR (Exclusive NOR)</code> logic gate.
        </p>
      </div>

      <div className="flex gap-12 items-center mb-6">
        {/* Input A */}
        <div className="flex flex-col items-center">
          <span className="mb-2">Input A</span>
          <button
            onClick={() => setInputA((prev) => !prev)}
            className={`w-24 py-2 text-sm border-2 rounded-sm font-bold ${
              inputA
                ? "bg-green-800 border-lime-400 text-black"
                : "bg-gray-900 border-gray-600 text-lime-300"
            } hover:brightness-125 transition-all`}
          >
            {inputA ? "TRUE" : "FALSE"}
          </button>
        </div>

        {/* Gate Graphic */}
        <div className="bg-gray-950 border border-lime-500 p-4 rounded-sm shadow-inner text-center">
          {notation === "electronic" ? (
            <pre className="whitespace-pre text-lime-300 text-sm">
{`          ┌──────────┐
${inputA ? "TRUE " : "FALSE"} ───▶│          │
                     │  XNOR    │──▶ ${output ? "TRUE" : "FALSE"}
${inputB ? "TRUE " : "FALSE"} ───▶│          │
          └──────────┘`}
            </pre>
          ) : (
            <pre className="whitespace-pre text-lime-300 text-sm text-left">
{`Propositions:
  P := ${inputA ? "⊤ (TRUE)" : "⊥ (FALSE)"}
  Q := ${inputB ? "⊤ (TRUE)" : "⊥ (FALSE)"}

Expression:
  (P ∧ Q) ∨ (¬P ∧ ¬Q) ⊢ ${output ? "⊤ (TRUE)" : "⊥ (FALSE)"}`}
            </pre>
          )}
        </div>

        {/* Input B */}
        <div className="flex flex-col items-center">
          <span className="mb-2">Input B</span>
          <button
            onClick={() => setInputB((prev) => !prev)}
            className={`w-24 py-2 text-sm border-2 rounded-sm font-bold ${
              inputB
                ? "bg-green-800 border-lime-400 text-black"
                : "bg-gray-900 border-gray-600 text-lime-300"
            } hover:brightness-125 transition-all`}
          >
            {inputB ? "TRUE" : "FALSE"}
          </button>
        </div>
      </div>

      {/* Output */}
      <p className="text-xl font-bold mb-6">
        Output:{" "}
        <span className={output ? "text-lime-300" : "text-red-500"}>
          {output ? "TRUE" : "FALSE"}
        </span>
      </p>

      {/* Unlock Button */}
      {output && (
        <button
          onClick={onSolve}
          className="mt-2 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
        >
          Unlock Gate
        </button>
      )}
    </div>
  );
};

export default GatePuzzle6;
