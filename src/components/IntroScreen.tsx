// src/components/IntroScreen.tsx
interface Props {
  onStart: () => void;
  onAbout: () => void;
}

const IntroScreen = ({ onStart, onAbout }: Props) => {
  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col items-center justify-center text-center p-8 tracking-wide">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 border-b border-lime-500 pb-2">
        🧪 GATE GATOR
      </h1>

      <p className="mb-8 text-lg max-w-md">
        Solve logic puzzles. Befriend (or annoy) a digital alligator. Escape the hall of gates.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={onStart}
          className="px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
        >
          ▶ Start
        </button>
        <button
          onClick={onAbout}
          className="px-6 py-2 border-2 border-lime-400 text-lime-300 font-bold rounded-sm hover:border-lime-200 transition-all"
        >
          ℹ About
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
