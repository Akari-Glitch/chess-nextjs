import { whitePieces, blackPieces } from "../../../table/dataTable";
import {protectedPieces} from "./protectedPieces"
//PieceOnWay is to stop the function if there an friendly piece on the way, this function is used in bishopMoves,
//towerMoves and queenMoves
export function pieceOnWay(
  colorPiece: boolean,
  numPieceBox: number,
  direction: number
): boolean {
  let positionMove: number = numPieceBox + direction;
  let box: HTMLElement | null = document.getElementById("box" + positionMove)
  let contentMove: string = String(box?.textContent
  );
  let condition: boolean = colorPiece
    ? whitePieces.includes(contentMove)
    : blackPieces.includes(contentMove);

  if (condition) {
    protectedPieces.push(box)
    return false;
  } else {
    return true;
  }
}
