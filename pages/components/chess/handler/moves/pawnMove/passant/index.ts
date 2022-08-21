export interface passantType {
  passantMove: HTMLElement | null;
  enemyPieceBox: HTMLElement | null;
  enemyPieceNumR: number | null;
  enemyPieceNumL: number | null;
}

export let passantWhite: passantType = {
  passantMove: null,
  enemyPieceBox: null,
  enemyPieceNumR: null,
  enemyPieceNumL: null,
};
export let passantBlack: passantType = {
  passantMove: null,
  enemyPieceBox: null,
  enemyPieceNumR: null,
  enemyPieceNumL: null,
};

export function passant(
  piece: string,
  toMove: HTMLElement,
  pieceBox: HTMLElement
) {
  passantWhite.passantMove = null;
  passantBlack.passantMove = null;
  const toMoveNum = Number(toMove.id.slice(3));
  const pieceBoxNum = Number(pieceBox.id.slice(3));

  if (piece === "♙") {
    if (pieceBoxNum > 48 && toMoveNum < 41) {
      passantBlack.passantMove = document.getElementById(
        "box" + (toMoveNum + 8)
      );
      passantBlack.enemyPieceNumL = toMoveNum - 1;
      passantBlack.enemyPieceNumR = toMoveNum + 1;
      passantBlack.enemyPieceBox = toMove as HTMLElement;
    }
  } else if (piece === "♟") {
    if (pieceBoxNum < 17 && toMoveNum > 24) {
      passantWhite.passantMove = document.getElementById(
        "box" + (toMoveNum - 8)
      );
      passantWhite.enemyPieceNumL = toMoveNum - 1;
      passantWhite.enemyPieceNumR = toMoveNum + 1;
      passantWhite.enemyPieceBox = toMove as HTMLElement;
    }
  }
}
