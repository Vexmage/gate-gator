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
            A hologram flickers to life. GREG’s face beams with pride — or at least, the algorithmic equivalent.
          </p>
          <p className="max-w-xl">
            <span className="italic text-lime-400">
              “You’ve done it. Even I struggled with that one when I was but a core script.”
            </span>
          </p>
        </>
      ) : (
        <>
          <p className="max-w-xl">
            The chamber dims, and a portal pulses open at the far end. A neutral voice issues from the wall.
          </p>
          <p className="max-w-xl italic text-lime-400">
            “Return to the hall. Deeper logic now unfolds.”
          </p>
        </>
      )}

      <p className="max-w-xl">
        You step through the portal and find yourself once more in the long, curved hallway. The hum of machinery fills the air.
      </p>

      <p className="max-w-xl">
        A low rumble shakes the corridor as <span className="text-lime-400 italic">Door B</span> shudders, then hisses open. The runes once static now glow with motion—shifting, alive.
      </p>

      {isGregFriend && (
        <p className="max-w-xl">
          <span className="italic text-lime-400">
            “Ah... now the <em>interesting</em> puzzles begin. I hope you like surprises.”
          </span>
        </p>
      )}

      <p className="max-w-xl text-sm text-gray-400 italic">
        You may now access Door B in the hallway. Door A no longer responds.
      </p>

      <button
        onClick={onContinue}
        className="mt-6 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
      >
        Return to Hallway
      </button>
    </div>
  );
};

export default PostPuzzle6Scene;
