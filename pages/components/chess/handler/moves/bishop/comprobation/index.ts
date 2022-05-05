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
    case "UPR":
      return numPieceBox > 8 && numPieceBox % 8 !== 0 ? true : false;
    case "UPL":
      return numPieceBox > 8 && (numPieceBox + 7) % 8 !== 0 ? true : false;
    case "DOWNR":
      return numPieceBox < 57 && numPieceBox % 8 !== 0 ? true : false;
    case "DOWNL":
      return numPieceBox < 57 && (numPieceBox + 7) % 8 !== 0 ? true : false;
    default:
      return false;
  }
}
