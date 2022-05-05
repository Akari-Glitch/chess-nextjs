import friendlyPiece from "../../comprobation/friendlyPiece";
export function moveComprobation(
  rightUpLong: HTMLElement | null,
  leftUpLong: HTMLElement | null,
  rightUpShort: HTMLElement | null,
  leftUpShort: HTMLElement | null,
  rightDownLong: HTMLElement | null,
  leftDownLong: HTMLElement | null,
  rightDownShort: HTMLElement | null,
  leftDownShort: HTMLElement | null,
  numPieceBox: number,
  friendly: string[]
): Array<HTMLElement | null> {
  let correctMoves: Array<HTMLElement | null> = [];

  /*RightUpLong and RightDownLong*/
  if (numPieceBox % 8 !== 0) {
    //RightUpLong
    if (numPieceBox > 16 && friendlyPiece(rightUpLong, friendly)) {
      correctMoves.push(rightUpLong);
    }
    //RightDownLong
    if (numPieceBox < 49 && friendlyPiece(rightDownLong, friendly)) {
      correctMoves.push(rightDownLong);
    }

    /*RightUpShort and RightDownShort*/
    if ((numPieceBox + 1) % 8 !== 0) {
      //RightUpShort
      if (numPieceBox > 8 && friendlyPiece(rightUpShort, friendly)) {
        correctMoves.push(rightUpShort);
      }

      //RightDownShort
      if (numPieceBox < 57 && friendlyPiece(rightDownShort, friendly)) {
        correctMoves.push(rightDownShort);
      }
    }
  }

  //LeftUpLong and LeftDownLong
  if ((numPieceBox + 7) % 8 !== 0) {
    //lefttUpLong
    if (numPieceBox > 16 && friendlyPiece(leftUpLong, friendly)) {
      correctMoves.push(leftUpLong);
    }

    //leftDownLong
    if (numPieceBox < 49 && friendlyPiece(leftDownLong, friendly)) {
      correctMoves.push(leftDownLong);
    }

    /*LeftUpShort and LeftDownShort*/
    if ((numPieceBox + 6) % 8 !== 0) {
      //LeftUpShort
      if (numPieceBox > 8 && friendlyPiece(leftUpShort, friendly)) {
        correctMoves.push(leftUpShort);
      }

      //LeftDownShort
      if (numPieceBox < 57 && friendlyPiece(leftDownShort, friendly)) {
        correctMoves.push(leftDownShort);
      }
    }
  }

  return correctMoves;
}
