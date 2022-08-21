import { whitePieces } from "./../../table/dataTable";
import { round, roundChange } from "../round";
import movesComprobation from "./comprobation";
import { moveTower } from "./king/castling";
import { queenPawn } from "./pawnMove/queenPawn";
import { passant, passantBlack, passantWhite } from "./pawnMove/passant";

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
      if (piece === "♔" || piece === "♚") {
        moveTower(toMove, pieceBox, colorPiece);
      }
      if (piece === "♙" || piece === "♟") {
        let passantEnemy: HTMLElement;
        if (colorPiece && toMove === passantWhite.passantMove) {
          passantEnemy = passantWhite.enemyPieceBox as HTMLElement;
          passantEnemy.textContent = "";
        } else if (!colorPiece && toMove === passantBlack.passantMove) {
          passantEnemy = passantBlack.enemyPieceBox as HTMLElement;
          passantEnemy.textContent = "";
        }
        queenPawn(toMove, piece);
      }
      passant(piece, toMove, pieceBox);
      changeCastlingValues(pieceBox, piece);
    }
  }
}

function changeCastlingValues(pieceBox: HTMLElement, piece: string) {
  //castling white

  const pieceBoxId = pieceBox.id;

  if (piece === "♖" || piece === "♔") {
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

  if (piece === "♜" || piece === "♚") {
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
