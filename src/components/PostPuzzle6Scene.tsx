// src/components/PostPuzzle6Scene.tsx

interface Props {
  isGregFriend: boolean | null;
  onContinue: () => void;
}

const PostPuzzle6Scene = ({ isGregFriend, onContinue }: Props) => {
  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col justify-center items-center px-6 py-10 space-y-6 tracking-wide text-center">
      <h1 className="text-2xl md:text-3xl font-bold border-b border-lime-500 pb-2">
        Resonant Threshold
      </h1>

      {isGregFriend ? (
        <>
          <p className="max-w-xl">
            A hologram flickers to life. GREG’s face beams with pride — or at least, the algorithmic
            equivalent.
          </p>
          <p className="max-w-xl">
            <span className="italic text-lime-400">“You’ve done it. Even I struggled with that one when I was but a core script.”</span>
          </p>
          <p className="max-w-xl">
            He gestures toward the far end of the chamber, where a portal now pulses with soft blue light.
          </p>
          <p className="max-w-xl italic text-lime-400">“Return now, friend, to the hall. The deeper logic awaits you there.”</p>
        </>
      ) : (
        <>
          <p className="max-w-xl">
            The chamber dims, and a portal pulses open at the far end. A neutral voice issues from the wall.
          </p>
          <p className="max-w-xl italic text-lime-400">
            “Return through the portal to the hall. Further trials lie ahead.”
          </p>
        </>
      )}

      <button
        onClick={onContinue}
        className="mt-6 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
      >
        Enter the Portal
      </button>
    </div>
  );
};

export default PostPuzzle6Scene;
