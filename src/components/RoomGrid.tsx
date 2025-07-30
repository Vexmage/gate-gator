// RoomGrid.tsx

import { useState, useEffect } from "react";
import "./RoomGrid.css"; // for animation styles

interface Entity {
  emoji: string;
  x: number;
  y: number;
  className?: string;
}

const RoomGrid = () => {
  const [gregY, setGregY] = useState(2); // assuming (2,2) center
  const [isBouncing, setIsBouncing] = useState(true);

  // Trigger bounce, then move up after short delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsBouncing(false);
      setGregY((prev) => Math.max(prev - 1, 0)); // move north
    }, 1200); // bounce duration
    return () => clearTimeout(timeout);
  }, []);

  const gridSize = 5;
  const player: Entity = { emoji: "🧑‍🦱", x: 1, y: 2 };
  const greg: Entity = { emoji: "🐊", x: 2, y: gregY, className: isBouncing ? "bounce" : "" };
  const door: Entity = { emoji: "🚪", x: 3, y: 2 };

  const cells: JSX.Element[] = [];

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let symbol = "·";
      let extraClass = "";

      if (x === player.x && y === player.y) symbol = player.emoji;
      else if (x === greg.x && y === greg.y) {
        symbol = greg.emoji;
        extraClass = greg.className ?? "";
      }
      else if (x === door.x && y === door.y) symbol = door.emoji;

      cells.push(
        <div key={`${x}-${y}`} className={`cell ${extraClass}`}>
          {symbol}
        </div>
      );
    }
  }

  return (
    <div className="grid-wrapper">
      <div className="grid">{cells}</div>
    </div>
  );
};

export default RoomGrid;
