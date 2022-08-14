import { protectedPieces } from './../../protectedPieces';
import { piecesData } from "..";
import checkmateToWhite from "./comprobation/checkmateToWhite";
import checkmateToBlack from "./comprobation/checkmateToBlack";
import { kingMoves } from "../../../king";

//CheckmateAnalysis servirá para en primer lugar saber si nuestro rey tiene movimientos posibles
//si nuestro rey está en jaque, se verá si hay forma de interceptar ese jaque
export function checkmate(checkTo: string) {
  let piecesMovesBlack: Array<HTMLElement | null> =
    piecesData.totalMovesBlack;

  let piecesMovesWhite: Array<HTMLElement | null> =
    piecesData.totalMovesWhite;

  console.log(checkTo);
  if (checkTo === "WHITE_CHECK") {
    checkmateAnalisys(piecesMovesBlack, "WHITE");
  } else if (checkTo === "BLACK_CHECK") {
    checkmateAnalisys(piecesMovesWhite, "BLACK");
  }
}
function checkmateAnalisys(
  piecesMoves: Array<HTMLElement | null>,
  kingColor: String
) {
  let movesKing: Array<HTMLElement | null> = [];
  let box : HTMLElement | null = null;
  let movesEnemy: Array<HTMLElement | null> = [];
  /*La siguiente estructura for consigue la posición del rey amenazado para luego
   ver sus movimientos disponibles*/
  for (let i = 1; i <= 64; i++) {
     box = document.getElementById("box" + i);

    if (kingColor === "WHITE" && box?.textContent === "♔") {
      movesKing = kingMoves(
        null,
        box,
        true,
        "MOVES"
      ) as Array<HTMLElement | null>;
      break;
    } else if (kingColor === "BLACK" && box?.textContent === "♚") {
      movesKing = kingMoves(
        null,
        box,
        false,
        "MOVES"
      ) as Array<HTMLElement | null>;
      break;

    }
  }
  
  // La siguiente estructura filtra los movimientos del rey
  let movesKingFilter: Array<HTMLElement | null> = [];
  movesKing.map((move) => {
    if (piecesMoves.indexOf(move) === -1 && protectedPieces.indexOf(move) === -1) {
      movesKingFilter.push(move);
    }
  });

  if(kingColor === "WHITE"){
    checkmateToWhite(movesKingFilter, box)
  }else if(kingColor === "BLACK"){
    checkmateToBlack(movesKingFilter, box)
  }
}
