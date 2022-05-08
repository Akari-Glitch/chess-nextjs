import { whitePieces } from "./../../table/dataTable";
import { round, roundChange } from "../round";
import movesComprobation from "./comprobation";
export function movePiece(
  correctMove: boolean,
  toMove: HTMLElement,
  pieceBox: HTMLElement
): void {
  const piece: string = String(pieceBox.textContent);
  correctMove = movesComprobation(String(piece), toMove, pieceBox);
  const colorPiece = whitePieces.includes(piece);

  if (correctMove && round === colorPiece) {
    let recoveryToMove = toMove.textContent;
    let recoveryPieceBox = pieceBox.textContent;
    toMove.textContent = piece;
    pieceBox.textContent = "";
    if (!roundChange()) {
      toMove.textContent = recoveryToMove;
      pieceBox.textContent = recoveryPieceBox;
      alert("no puedes mover, estas en jaque");
    }
  }
}
