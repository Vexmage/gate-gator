import { useState } from "react";

const PostPuzzle1Scene = ({ onContinue }: { onContinue: () => void }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [friendChoice, setFriendChoice] = useState<"yes" | "no" | null>(null);

  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono flex flex-col items-center justify-center p-8">
      <div className="max-w-xl text-center space-y-4">
        <p>The cell door unlocks with a click and a hiss of air.</p>
        <p>GateGator blinks, clearer now. “I knew you could do it,” he says.</p>
        <p>“Another gate seals this room. It's beyond me now... but you...”</p>
        <p>He steps aside. “You have the logic.”</p>

        {!showIntro && (
          <button
            onClick={() => setShowIntro(true)}
            className="mt-4 px-4 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
          >
            Ask: Who are you?
          </button>
        )}

        {showIntro && (
          <>
            <div className="mt-4 text-left bg-gray-950 p-4 border border-lime-400 rounded-sm space-y-2">
              <p>“I–I am GREG,” he stammers. Then corrects, “That is... G-R-E-G.”</p>
              <p className="italic">Gatekeeper and Reactive Engineering Gator.</p>
              <p>
                “[static]... was top-tier logicware. Before the Collapse. Before... mm-memory degra—”
              </p>
              <p>
                He pauses. Reboots his tone. “I *still function.* Mostly. I remember gate logic. Protocols. Failover paths.”
              </p>
              <p>“You're the new h-handler. That makes you my operator. My... friend?”</p>
            </div>

            {!friendChoice && (
              <div className="flex gap-4 mt-4 justify-center">
                <button
                  onClick={() => setFriendChoice("yes")}
                  className="px-4 py-2 border border-lime-400 bg-green-800 text-black rounded-sm hover:bg-green-600"
                >
                  Yes, I am your friend.
                </button>
                <button
                  onClick={() => setFriendChoice("no")}
                  className="px-4 py-2 border border-lime-400 bg-green-800 text-black rounded-sm hover:bg-green-600"
                >
                  No, I am not your friend.
                </button>
              </div>
            )}

            {friendChoice === "yes" && (
              <div className="mt-4 text-left bg-gray-950 p-4 border border-lime-400 rounded-sm">
                <p>“I have never had a friend before... GREG will learn what this is.”</p>
              </div>
            )}

            {friendChoice === "no" && (
              <div className="mt-4 text-left bg-gray-950 p-4 border border-lime-400 rounded-sm">
                <p>“Understood. GREG is a guide tool for user.”</p>
              </div>
            )}
          </>
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

export default PostPuzzle1Scene;
