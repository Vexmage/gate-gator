import { useState } from "react";
import RoomGrid from "./RoomGrid";
import HallwayGrid from "./HallwayGrid";

interface Props {
  onChoosePath: (path: string) => void;
  doorBUnlocked: boolean;
}

const PostPuzzle2Scene = ({ onChoosePath, doorBUnlocked }: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="min-h-screen bg-black text-lime-300 font-mono p-8 flex flex-col items-center justify-center">
      <HallwayGrid />
      <div className="max-w-2xl space-y-4 text-center">
        <p>The gate opens with a heavy thunk and hissing decompress.</p>
        <p>You step into a narrow, dimly lit hallway.</p>
        <p className="italic text-gray-400">
          Metal creaks... something drips. Pipes rattle. You hear distant groaning... or maybe whalesong?
        </p>
        <p>
          The walls here are curved—submarine-like. This place was built for pressure... and secrets.
        </p>
        <p>You spot three distinct doors ahead:</p>

        {!showOptions && (
          <button
            onClick={() => setShowOptions(true)}
            className="mt-4 px-6 py-2 border-2 border-lime-400 bg-green-800 text-black font-bold rounded-sm hover:bg-green-600 transition-all"
          >
            Examine the doors
          </button>
        )}

        {showOptions && (
          <div className="space-y-4 mt-6 text-left bg-gray-950 p-4 border border-lime-400 rounded-sm">

            {/* Door A — disabled if Door B is unlocked */}
            <div>
              <p>
                <strong className="text-lime-400">🟩 Door A – Logic Lock</strong>
              </p>
              {doorBUnlocked ? (
                <>
                  <p className="text-gray-400">You’ve already completed this puzzle.</p>
                  <button
                    disabled
                    className="mt-2 px-4 py-1 border border-gray-600 bg-gray-800 text-gray-500 rounded-sm cursor-not-allowed"
                  >
                    Completed
                  </button>
                </>
              ) : (
                <>
                  <p>A shimmering glyph pulses with logic flow. Likely another puzzle awaits.</p>
                  <button
                    onClick={() => onChoosePath("logic")}
                    className="mt-2 px-4 py-1 border border-lime-400 bg-green-800 text-black rounded-sm hover:bg-green-600"
                  >
                    Enter Door A
                  </button>
                </>
              )}
            </div>

            {/* Door B — shown either locked or unlocked */}
            <div>
              <p>
                <strong className="text-lime-400">
                  {doorBUnlocked ? "🟨 Door B – Unsealed" : "🟨 Door B – Unknown Symbol"}
                </strong>
              </p>
              {doorBUnlocked ? (
                <>
                  <p>The glyphs shimmer and part, revealing a passage beyond. A deeper puzzle calls.</p>
                  <button
                    onClick={() => onChoosePath("unknown")}
                    className="mt-2 px-4 py-1 border border-lime-400 bg-yellow-700 text-black rounded-sm hover:bg-yellow-600"
                  >
                    Enter Door B
                  </button>
                </>
              ) : (
                <>
                  <p>The door is marked with unfamiliar runes and emits a low hum. It appears to be locked from some external mechanism.</p>
                  <button
                    disabled
                    className="mt-2 px-4 py-1 border border-gray-600 bg-gray-800 text-gray-500 rounded-sm cursor-not-allowed"
                  >
                    Locked
                  </button>
                </>
              )}
            </div>

            {/* Door C — always locked */}
            <div>
              <p><strong className="text-lime-400">🔒 Door C – Locked</strong></p>
              <p>A heavy hatch sealed with a physical key mechanism. No keypad. No puzzle.</p>
              <p className="italic text-sm text-gray-400">You’ll need to find a key elsewhere...</p>
              <button
                disabled
                className="mt-2 px-4 py-1 border border-gray-600 bg-gray-800 text-gray-500 rounded-sm cursor-not-allowed"
              >
                Locked
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPuzzle2Scene;
