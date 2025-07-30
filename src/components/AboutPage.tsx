// src/components/AboutPage.tsx

interface Props {
  onContinue: () => void;
}

const AboutPage = ({ onContinue }: Props) => {
  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono p-8 flex flex-col items-center justify-center text-center tracking-wide">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b border-lime-500 pb-2">
        🧠 Gate Gator: About This Project
      </h1>

      <p className="max-w-xl mb-6 text-lg">
        <strong>Gate Gator</strong> is a logic-based puzzle game built with React and TypeScript.  
        Players must unlock gates by correctly configuring digital logic circuits using common logic gates like AND, OR, XOR, NAND, and NOR.
      </p>

      <p className="max-w-xl mb-6">
        Along the way, players encounter a snarky cyber-alligator named <strong>GREG</strong> 🐊 who may become a friend… or not.
        The game explores logic puzzles, conditional rendering, and state-driven storytelling with retro terminal aesthetics.
      </p>

      <div className="max-w-xl text-sm mb-8">
        <p><strong>Tech Stack:</strong> React, TypeScript, Tailwind CSS</p>
        <p><strong>Design Goals:</strong> Modular component architecture, stateful puzzle logic, and interactive storytelling.</p>
        <p><strong>Bonus:</strong> GREG is fully logic-compliant. Probably.</p>
      </div>

      <button
        onClick={onContinue}
        className="mt-2 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
      >
        Begin Puzzle Sequence
      </button>
    </div>
  );
};

export default AboutPage;
