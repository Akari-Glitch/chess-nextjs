import friendlyPiece from "../../comprobation/friendlyPiece";

export function moveComprobation(
  up: HTMLElement | null,
  upR: HTMLElement | null,
  upL: HTMLElement | null,
  right: HTMLElement | null,
  left: HTMLElement | null,
  down: HTMLElement | null,
  downR: HTMLElement | null,
  downL: HTMLElement | null,
  numPieceBox: number,
  friendly: string[]
): Array<HTMLElement | null> {
  let correctMoves: Array<HTMLElement | null> = [];
  /*adding up, upR and upL*/
  if (numPieceBox > 8) {
    //adding up
    if (friendlyPiece(up, friendly)) {
      correctMoves.push(up);
    }
    //adding upR
    if (numPieceBox % 8 !== 0 && friendlyPiece(upR, friendly)) {
      correctMoves.push(upR);
    }
    //adding upL
    if ((numPieceBox + 7) % 8 !== 0 && friendlyPiece(upL, friendly)) {
      correctMoves.push(upL);
    }
  }
  /*adding right*/
  if (numPieceBox % 8 !== 0 && friendlyPiece(right, friendly)) {
    correctMoves.push(right);
  }
  /*adding left*/
  if ((numPieceBox + 7) % 8 !== 0 && friendlyPiece(left, friendly)) {
    correctMoves.push(left);
  }

  /*adding down, downR and downL*/
  if (numPieceBox < 57) {
    //adding down
    if (friendlyPiece(down, friendly)) {
      correctMoves.push(down);
    }
    //adding downL
    if ((numPieceBox + 7) % 8 !== 0 && friendlyPiece(downL, friendly)) {
      correctMoves.push(downL);
    }
    // adding downR
    if (numPieceBox % 8 !== 0 && friendlyPiece(downR, friendly)) {
      correctMoves.push(downR);
    }
  }

  return correctMoves;
}
