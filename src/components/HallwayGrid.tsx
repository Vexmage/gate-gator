// HallwayGrid.tsx
import React from 'react';

import "./RoomGrid.css";

interface Entity {
  emoji: string;
  x: number;
  y: number;
}

const HallwayGrid = () => {
  const gridWidth = 5;
  const gridHeight = 7;

  const entities: Entity[] = [
    { emoji: "🧑‍🦱", x: 2, y: 0 }, // Player at bottom of hall
    { emoji: "🚪", x: 4, y: 1 },   // Door A – right side, row 1
    { emoji: "🚪", x: 0, y: 3 },   // Door B – left side, row 3
    { emoji: "🔒", x: 2, y: 6 },   // Door C – end of hall
  ];

  const cells: JSX.Element[] = [];

  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      const entity = entities.find(e => e.x === x && e.y === y);
      cells.push(
        <div key={`${x}-${y}`} className="cell">
          {entity ? entity.emoji : "·"}
        </div>
      );
    }
  }

  return (
    <div className="grid-wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridWidth}, 1.5rem)`,
          gridTemplateRows: `repeat(${gridHeight}, 1.5rem)`,
        }}
      >
        {cells}
      </div>
    </div>
  );
};

export default HallwayGrid;
