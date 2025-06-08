import React, { useState } from "react";

interface Props {
  onSelect: (notation: "symbolic" | "electronic") => void;
}

const NotationSelector: React.FC<Props> = ({ onSelect }) => {
  const [selected, setSelected] = useState<"symbolic" | "electronic" | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Which logic do you speak?</h2>
      <div className="flex gap-4">
        <button
          className={`px-6 py-3 rounded-md border ${
            selected === "symbolic" ? "bg-purple-700 border-purple-500" : "border-gray-600"
          } hover:bg-purple-600 transition`}
          onClick={() => setSelected("symbolic")}
        >
          Symbolic Logic
        </button>
        <button
          className={`px-6 py-3 rounded-md border ${
            selected === "electronic" ? "bg-green-700 border-green-500" : "border-gray-600"
          } hover:bg-green-600 transition`}
          onClick={() => setSelected("electronic")}
        >
          Electronic Logic
        </button>
      </div>

      {selected && (
        <button
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-md font-semibold"
          onClick={() => onSelect(selected)}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default NotationSelector;
