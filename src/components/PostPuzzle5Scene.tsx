// src/components/PostPuzzle5Scene.tsx

interface Props {
  onContinue: () => void;
}

const PostPuzzle5Scene = ({ onContinue }: Props) => {
  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col justify-center items-center px-6 py-10 space-y-6 tracking-wide">
      <h1 className="text-2xl md:text-3xl font-bold border-b border-lime-500 pb-2">
        The Gate of Shadows and Mirrors
      </h1>

      <p className="max-w-xl text-center">
        A veil of flickering code descends. The chamber around you splits and echoes — logic and its negation, truth
        and inversion. You feel the pull of contradiction and the thrill of resolution.
      </p>

      <p className="max-w-xl text-center">
        The last fundamental gate awaits. Beyond it lies the portal back to the hall of choices, where new paths may yet unfold.
      </p>

      <p className="max-w-xl text-center italic text-lime-400">
        “When you deny a truth, you also define it.”
      </p>

      <button
        onClick={onContinue}
        className="mt-4 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
      >
        Face the Final Logic Gate
      </button>
    </div>
  );
};

export default PostPuzzle5Scene;
