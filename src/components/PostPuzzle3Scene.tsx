import { useState } from "react";

interface Props {
  onContinue: () => void;
  isGregFriend: boolean | null;
}

const PostPuzzle3Scene = ({ onContinue, isGregFriend }: Props) => {
  const [showDialogue, setShowDialogue] = useState(false);

  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col items-center justify-center p-8">
      <div className="max-w-xl text-center space-y-4">

        <p>The third door hisses open. You step into a narrower chamber, dimly lit by panels etched with glowing circuit-runes.</p>
        <p>GREG clunks forward, his voice a little clearer now. “Progress... registered.”</p>

        {!showDialogue && (
          <button
            onClick={() => setShowDialogue(true)}
            className="mt-4 px-4 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
          >
            Talk to GREG
          </button>
        )}

        {showDialogue && (
          <div className="mt-4 text-left bg-gray-950 p-4 border border-lime-400 rounded-sm space-y-2">
            {isGregFriend ? (
              <>
                <p>“Friend... you are adapting well. Your pattern recognition exceeds predicted models.”</p>
                <p>“This test was... negation. A vital piece of the logic puzzle.”</p>
                <p>“Just a few more gates remain, and then... maybe... I can show you more than just locks and switches.”</p>
              </>
            ) : (
              <>
                <p>“User has passed third gate. Negation logic processed successfully.”</p>
                <p>“Further gates pending: XOR. NOR. XNOR. Completion will unlock central directive access.”</p>
                <p>“Standby: Gate prepared.”</p>
              </>
            )}
            <p>He gestures toward the next gate. “Proceed when ready.”</p>
          </div>
        )}

        <button
          onClick={onContinue}
          className="mt-6 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
        >
          Approach Next Gate
        </button>
      </div>
    </div>
  );
};

export default PostPuzzle3Scene;
