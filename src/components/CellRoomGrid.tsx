// CellRoomGrid.tsx
import { useState, useEffect } from "react";
import "./RoomGrid.css";

interface Entity {
  name: string;
  sprite: string;
  x: number;
  y: number;
}

interface CellRoomGridProps {
  width: number;
  height: number;
  characters: Entity[];
}

const CellRoomGrid = ({ width, height, characters }: CellRoomGridProps) => {
  const [gregY, setGregY] = useState(2);
  const [isBouncing, setIsBouncing] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsBouncing(false);
      setGregY((prev) => Math.max(prev - 1, 0));
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  const cells: React.ReactElement[] = [];


  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let symbol = "·";
      let extraClass = "";

      for (const char of characters) {
        const isGreg = char.name.toLowerCase() === "greg";
        const sprite = isGreg && isBouncing ? "🐊" : char.sprite;

        if (char.x === x && char.y === y) {
          symbol = sprite;
          extraClass = isGreg && isBouncing ? "bounce" : "";
          break;
        }
      }

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

export default CellRoomGrid;
