// components/PostPuzzle7Scene.tsx
import { useState, useEffect } from "react";


interface Props {
  onContinue: () => void;
}

const PostPuzzle7Scene = ({ onContinue }: Props) => {
  const [gridBugVisible, setGridBugVisible] = useState(false);
  const [gatorSpeaking, setGatorSpeaking] = useState(false);

  useEffect(() => {
    const bugTimeout = setTimeout(() => setGridBugVisible(true), 1000);
    const speechTimeout = setTimeout(() => setGatorSpeaking(true), 2000);
    const continueTimeout = setTimeout(() => onContinue(), 6000); // go to puzzle 8

    return () => {
      clearTimeout(bugTimeout);
      clearTimeout(speechTimeout);
      clearTimeout(continueTimeout);
    };
  }, [onContinue]);

  return (
    <div className="post-puzzle7-scene bg-black text-lime-300 font-mono min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div>Suddenly... something flickers in the grid.</div>

      {gridBugVisible && <div className="text-red-400 animate-pulse">A Grid Bug appears!</div>}

      {gatorSpeaking && (
        <div className="max-w-xl">
          <p>
            🐊: No... you can't overcome him with your physical body...
            <br />
            You must... you must solve the next puzzle.
          </p>
        </div>
      )}
    </div>
  );
};

export default PostPuzzle7Scene;
