import { whitePieces } from "./../../../../table/dataTable";
import { passantBlack } from "../passant";

export function moveComprobationBlack(
  normalMov: HTMLElement | null,
  doubleMov: HTMLElement | null,
  eatMov0: HTMLElement | null,
  eatMov1: HTMLElement | null,
  numPieceBox: number
) {
  let correctMoves: Array<HTMLElement | null> = [];
  const pieceBoxParent = document.getElementById("box" + numPieceBox)
    ?.parentNode as HTMLElement;
  const enemyPieceParent = passantBlack.enemyPieceBox?.parentNode;

  //add passantWhite

  if (
    (passantBlack.enemyPieceNumR === numPieceBox ||
      passantBlack.enemyPieceNumL === numPieceBox) &&
    passantBlack.passantMove !== null &&
    enemyPieceParent == pieceBoxParent
  ) {
    correctMoves.push(passantBlack.passantMove);
  }

  //add normalMov (black)
  if (normalMov?.textContent === "") {
    correctMoves.push(normalMov);
  }

  // add doublemov (black)
  if (numPieceBox < 17 && doubleMov?.textContent === "") {
    correctMoves.push(doubleMov);
  }

  //add eatMov1 right(black)
  if (numPieceBox % 8 !== 0) {
    if (whitePieces.includes(String(eatMov0?.textContent))) {
      correctMoves.push(eatMov0);
    }
  }
  //add eatMov0 left(black)
  if ((numPieceBox + 7) % 8 !== 0) {
    if (whitePieces.includes(String(eatMov1?.textContent))) {
      correctMoves.push(eatMov1);
    }
  }
  return correctMoves;
}
