import friendlyPiece from "../../comprobation/friendlyPiece";
import { castlingBlack, castlingWhite } from "../..";
import { castling } from "../castling";
export function moveComprobation(
  up: HTMLElement | null,
  upR: HTMLElement | null,
  upL: HTMLElement | null,
  right: HTMLElement | null,
  left: HTMLElement | null,
  down: HTMLElement | null,
  downR: HTMLElement | null,
  downL: HTMLElement | null,
  castlingShort: HTMLElement | null,
  castlingLarge: HTMLElement | null,
  colorPiece: boolean,
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

  const castlingMovesShort: Array<HTMLElement | null> = [right, castlingShort];
  if (
    right?.textContent === "" &&
    castlingShort?.textContent === "" &&
    castling(castlingMovesShort, colorPiece)
  ) {
    if (colorPiece && castlingWhite.king && castlingWhite.short) {
      correctMoves.push(castlingShort);
    } else if (!colorPiece && castlingBlack.king && castlingBlack.short) {
      correctMoves.push(castlingShort);
    }
  }

  const castlingLNum: number = Number(castlingLarge?.id.slice(3));
  const moveLarge: HTMLElement | null = document.getElementById(
    "box" + (castlingLNum - 1)
  );
  const castlingMovesLarge: Array<HTMLElement | null> = [
    left,
    castlingLarge,
    moveLarge,
  ];

  if (
    left?.textContent === "" &&
    castlingLarge?.textContent === "" &&
    moveLarge?.textContent === "" &&
    castling(castlingMovesLarge, colorPiece)
  ) {
    if (colorPiece && castlingWhite.king && castlingWhite.large) {
      correctMoves.push(castlingLarge);
    } else if (!colorPiece && castlingBlack.king && castlingBlack.large) {
      correctMoves.push(castlingLarge);
    }
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
