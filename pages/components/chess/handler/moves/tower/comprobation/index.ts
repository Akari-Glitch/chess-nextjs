import { pieceOnWay } from "../../comprobation/pieceOnWay";

export function addingMoves(
  conditionD: string,
  direction: number,
  colorPiece: boolean,
  numPieceBox: number
): Array<HTMLElement | null> {
  let moves: Array<HTMLElement | null> = [];

  while (
    condition(conditionD, numPieceBox) &&
    pieceOnWay(colorPiece, numPieceBox, direction)
  ) {
    let move: HTMLElement | null = document.getElementById(
      `box${numPieceBox + direction}`
    );
    moves.push(move);

    if (String(move?.textContent).length > 0) {
      break;
    }
    numPieceBox = numPieceBox + direction;
  }
  return moves;
}

function condition(conditionD: string, numPieceBox: number): boolean {
  switch (conditionD) {
    case "UP":
      return numPieceBox > 8 ? true : false;
    case "DOWN":
      return numPieceBox < 57 ? true : false;
    case "RIGHT":
      return numPieceBox % 8 !== 0 ? true : false;
    case "LEFT":
      return (numPieceBox + 7) % 8 !== 0 ? true : false;
    default:
      return false;
  }
}
