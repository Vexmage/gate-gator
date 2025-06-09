interface Props {
  onContinue: () => void;
}

const PostPuzzle4Scene = ({ onContinue }: Props) => {
  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col justify-center items-center px-6 py-10 space-y-6 tracking-wide">
      <h1 className="text-2xl md:text-3xl font-bold border-b border-lime-500 pb-2">
        Chamber of Echoing Circuits
      </h1>

      <p className="max-w-xl text-center">
        As the fourth gate clicks open, the chamber begins to hum — not with power, but memory.
        Strange echoes bounce through the metallic walls, reverberating with fragments of the logic gates you've mastered.
      </p>

      <p className="max-w-xl text-center">
        You have proven your grasp of the fundamentals. From here forward, the puzzles will challenge you to combine,
        reflect, and abstract. Some may defy linear reasoning.
      </p>

      <p className="max-w-xl text-center italic text-lime-400">
        “Logic is not the end — it is the path to seeing the whole machine.”
      </p>

      <button
        onClick={onContinue}
        className="mt-4 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
      >
        Continue to the Next Gate
      </button>
    </div>
  );
};

export default PostPuzzle4Scene;
