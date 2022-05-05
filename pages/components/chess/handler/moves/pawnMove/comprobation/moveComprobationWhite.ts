import { blackPieces } from "./../../../../table/dataTable";
export function moveComprobationWhite(
  normalMov: HTMLElement | null,
  doubleMov: HTMLElement | null,
  eatMov0: HTMLElement | null,
  eatMov1: HTMLElement | null,
  numPieceBox: number
): Array<HTMLElement | null> {
  let correctMoves: Array<HTMLElement | null> = [];
  //add normalMov (white)
  if (normalMov?.textContent === "") {
    correctMoves.push(normalMov);
  }

  // add doublemov (white)
  if (numPieceBox > 48 && doubleMov?.textContent === "") {
    correctMoves.push(doubleMov);
  }

  //add eatMov0 (white)
  if ((numPieceBox + 7) % 8 !== 0) {
    if (blackPieces.includes(String(eatMov0?.textContent))) {
      correctMoves.push(eatMov0);
    }
  }
  //add eatMov1 (white)
  if (numPieceBox % 8 !== 0) {
    if (blackPieces.includes(String(eatMov1?.textContent))) {
      correctMoves.push(eatMov1);
    }
  }
  return correctMoves;
}
