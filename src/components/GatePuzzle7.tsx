import { useState } from "react";

interface Props {
  onSolve: () => void;
  notation: "symbolic" | "electronic";
}

const GatePuzzle7 = ({ onSolve, notation }: Props) => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);
  const [inputC, setInputC] = useState(false);

  const output = (inputA && inputB) || (!inputB && inputC);

  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col items-center justify-center p-8 tracking-wide">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 border-b border-lime-500 pb-2">
        Logic Puzzle 7: Nested Gate
      </h1>

      <div className="mb-6 text-center max-w-xl">
        <p>
          A complex circuit lies before you. No hints this time.<br />
          You must test combinations and deduce the logic to proceed.
        </p>
      </div>

      <div className="flex gap-12 items-center mb-6">
        {/* Inputs */}
        <div className="flex flex-col items-center">
          <span className="mb-2">Input A</span>
          <button
            onClick={() => setInputA(prev => !prev)}
            className={`w-24 py-2 text-sm border-2 rounded-sm font-bold ${
              inputA
                ? "bg-green-800 border-lime-400 text-black"
                : "bg-gray-900 border-gray-600 text-lime-300"
            } hover:brightness-125 transition-all`}
          >
            {inputA ? "TRUE" : "FALSE"}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2">Input B</span>
          <button
            onClick={() => setInputB(prev => !prev)}
            className={`w-24 py-2 text-sm border-2 rounded-sm font-bold ${
              inputB
                ? "bg-green-800 border-lime-400 text-black"
                : "bg-gray-900 border-gray-600 text-lime-300"
            } hover:brightness-125 transition-all`}
          >
            {inputB ? "TRUE" : "FALSE"}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2">Input C</span>
          <button
            onClick={() => setInputC(prev => !prev)}
            className={`w-24 py-2 text-sm border-2 rounded-sm font-bold ${
              inputC
                ? "bg-green-800 border-lime-400 text-black"
                : "bg-gray-900 border-gray-600 text-lime-300"
            } hover:brightness-125 transition-all`}
          >
            {inputC ? "TRUE" : "FALSE"}
          </button>
        </div>
      </div>

      {/* Gate Diagram */}
      <div className="bg-gray-950 border border-lime-500 p-4 rounded-sm shadow-inner text-center mb-6">
        {notation === "electronic" ? (
          <pre className="whitespace-pre text-lime-300 text-sm">
{`              ┌─────────────┐
  A ─────▶│             │
  B ─────▶│ ComplexGate │──▶ ${output ? "TRUE" : "FALSE"}
  C ─────▶│             │
              └─────────────┘`}
          </pre>
        ) : (
          <pre className="whitespace-pre text-lime-300 text-sm text-left">
{`Propositions:
  A := ${inputA ? "⊤" : "⊥"}
  B := ${inputB ? "⊤" : "⊥"}
  C := ${inputC ? "⊤" : "⊥"}

Expression:
  (A ∧ B) ∨ (¬B ∧ C) ⊢ ${output ? "⊤" : "⊥"}`}
          </pre>
        )}
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

export default GatePuzzle7;
