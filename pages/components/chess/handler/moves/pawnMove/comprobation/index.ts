import { moveComprobationBlack } from "./moveComprobationBlack";
import { moveComprobationWhite } from "./moveComprobationWhite";

export function moveComprobation(
  normalMov: HTMLElement | null,
  doubleMov: HTMLElement | null,
  eatMov0: HTMLElement | null,
  eatMov1: HTMLElement | null,
  colorPiece: boolean,
  numPieceBox: number
): Array<HTMLElement | null> {
  if (colorPiece) {
    return moveComprobationWhite(
      normalMov,
      doubleMov,
      eatMov0,
      eatMov1,
      numPieceBox
    );
  } else {
    return moveComprobationBlack(
      normalMov,
      doubleMov,
      eatMov0,
      eatMov1,
      numPieceBox
    );
  }
}
