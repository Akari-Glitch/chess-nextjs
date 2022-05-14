import { piecesData } from "..";

export function checkMate(checkTo: string) {
  let attackingPieces;
  let piecesMoves: Array<Array<HTMLElement | null>> =
    piecesData.blackPieces.moves;
  console.log(piecesMoves);
  if (checkTo === "WHITE_CHECK") {
  } else if (checkTo === "BLACK_CHECK") {
  }
}

function checkMateAnalisys(piecesMoves: Array<Array<HTMLElement | null>>) {
  for (let i = 0; i < piecesMoves.length; i++) {}
}
