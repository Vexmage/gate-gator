// components/GatePuzzle8.tsx
interface Props {
  onSolve: () => void;
  notation: "symbolic" | "electronic";
}

const GatePuzzle8 = ({ onSolve, notation }: Props) => {
  return (
    <div className="bg-black text-lime-300 min-h-screen flex items-center justify-center font-mono p-6 text-center">
      <p>[Puzzle 8 will go here. Notation: {notation}]</p>
      <button onClick={onSolve} className="mt-4 px-4 py-2 bg-lime-600 text-white">
        Solve Puzzle 8
      </button>
    </div>
  );
};

export default GatePuzzle8;
