import { whitePieces, blackPieces } from "../../../table/dataTable";
//PieceOnWay is to stop the function if there an friendly piece on the way, this function is used in bishopMoves,
//towerMoves and queenMoves
export function pieceOnWay(
  colorPiece: boolean,
  numPieceBox: number,
  direction: number
): boolean {
  let positionMove: number = numPieceBox + direction;
  let contentMove: string = String(
    document.getElementById("box" + positionMove)?.textContent
  );
  let condition: boolean = colorPiece
    ? whitePieces.includes(contentMove)
    : blackPieces.includes(contentMove);

  if (condition) {
    return false;
  } else {
    return true;
  }
}
