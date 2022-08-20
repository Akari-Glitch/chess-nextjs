import { whitePieces } from "./../../table/dataTable";
import { round, roundChange } from "../round";
import movesComprobation from "./comprobation";
import { moveTower } from "./king/castling";

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
    } else {

      if(piece === "♔" || piece === "♚"){
        moveTower(toMove, pieceBox, colorPiece)
    }

      changeCastlingValues(pieceBox);
    }
  }
}

export let castlingWhite = {
  short: true,
  large: true,
  king: true,
};

export let castlingBlack = {
  short: true,
  large: true,
  king: true,
};

function changeCastlingValues(pieceBox: HTMLElement) {
  //castling white

  const pieceBoxId = pieceBox.id;

  if (pieceBox.textContent === "♖" || pieceBox.textContent === "♔") {
    if (pieceBoxId === "box64") {
      castlingWhite.short = false;
    }
    if (pieceBoxId === "box57") {
      castlingWhite.large = false;
    }
    if (pieceBoxId === "box61") {
      castlingWhite.king = false;
    }
  }
  // castling black

  if (pieceBox.textContent === "♜" || pieceBox.textContent === "♚") {
    if (pieceBoxId === "box1") {
      castlingBlack.large = false;
    }
    if (pieceBoxId === "box8") {
      castlingBlack.short = false;
    }
    if (pieceBoxId === "box5") {
      castlingBlack.king = false;
    }
  }
}
