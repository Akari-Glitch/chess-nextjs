import { movePiece } from "./moves";
import { whitePieces, blackPieces } from "../table/dataTable";
const colorSelect: string = "#F6F669";
let isBoxSelect: boolean = false;
let lastBox: HTMLElement;

export function selectBox(box: HTMLElement): void {
  //if colorpiece is true, is because the piece is white or if colorPiece is black, is because the piece is black
  const colorPiece = whitePieces.includes(String(box.textContent));

  if (isBoxSelect) {
    if (lastBox.textContent !== "") {
      const correctMove: boolean = pieceSelect(
        String(lastBox.textContent),
        String(box.textContent)
      );
      movePiece(correctMove, box, lastBox);
    }

    deselectBox(lastBox, box.style.backgroundColor);
  } else {
    isBoxSelect = true;
  }

  lastBox = box;

  box.style.background = colorSelect;
}

////
function deselectBox(box: HTMLElement, colorBack: string): void {
  box.style.backgroundColor = colorBack;
}
////
function pieceSelect(piece: string, pieceToEat: string): boolean {
  /*colorPiece if is true will be white or if is false will be black */
  const colorPiece: boolean = whitePieces.includes(String(piece));
  /*colorPieceToEat if is true will be black or if if is false will be white*/
  const colorPieceToEat: boolean = blackPieces.includes(String(pieceToEat));

  if ((colorPiece && colorPieceToEat) || (!colorPiece && !colorPieceToEat)) {
    return true;
  }
  return false;
}
