import "./RoomGrid.css";

interface Entity {
  emoji: string;
  x: number;
  y: number;
}

const HallwayGrid = () => {
  const gridSize = 5;

  const player: Entity = { emoji: "🧑‍🦱", x: 2, y: 3 };
  const doorA: Entity = { emoji: "🟩", x: 1, y: 2 };
  const doorB: Entity = { emoji: "🟨", x: 2, y: 2 };
  const doorC: Entity = { emoji: "🔒", x: 3, y: 2 };

  const entities = [player, doorA, doorB, doorC];

  const cells: JSX.Element[] = [];

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const match = entities.find((e) => e.x === x && e.y === y);
      cells.push(
        <div key={`${x}-${y}`} className="cell">
          {match?.emoji || "·"}
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

export default HallwayGrid;
