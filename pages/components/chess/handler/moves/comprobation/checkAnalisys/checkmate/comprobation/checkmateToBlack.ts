import { pieceType } from "./../../../../../../../../interface/pieceType";
import { piecesData } from "../..";
import { interceptMovesMajor, interceptMovesMinor } from "./interceptMoves";

export default function checkmateToBlack(
  movesKing: Array<HTMLElement | null>,
  kingBox: HTMLElement | null
) {
  let { piece, box, moves } = piecesData.whitePieces;
  let attackingPieces: pieceType = {
    pieces: [],
    box: [],
    moves: [],
  };

  let guardianPieces: pieceType = {
    pieces: [],
    box: [],
    moves: [],
  };

  moves.map((movesPiece, index) => {
    if (movesPiece.indexOf(kingBox) > -1) {
      attackingPieces.moves.push(movesPiece);
      attackingPieces.pieces.push(piece[index - 1]);
      attackingPieces.box.push(box[index - 1]);
    }
  });

  if (attackingPieces.pieces.length > 1 && movesKing.length === 0) {
    alert("Jaque mate, negras pierden");
  } else if (attackingPieces.pieces.length === 1) {
    // a partir de aqui veremos que pieza ataca y como interceptar sus movimientos
    // por supuesto que el caballo ni el peon estan implicado aqui
    const attackingNumBox = Number(attackingPieces.box[0]?.id.slice(3));
    const kingNumBox = Number(String(kingBox?.id.slice(3)));
    let movesToIntercept: Array<HTMLElement> = [];
    // la pieza que ataca esta arriba o a la izquierda
    if (attackingNumBox > kingNumBox) {
      if (attackingPieces.pieces[0] === "♖") {
        //esta a la izquierda
        if (attackingNumBox - kingNumBox <= 7) {
          movesToIntercept = interceptMovesMajor(
            kingNumBox,
            attackingNumBox,
            1
          );
          console.log("izquierda");
        } else {
          //esta arriba
          movesToIntercept = interceptMovesMajor(
            kingNumBox,
            attackingNumBox,
            8
          );
          console.log("arriba");
        }
      }
    }

    // la pieza que ataca esta abajo o a la derecha
    if (attackingNumBox < kingNumBox) {
      if (attackingPieces.pieces[0] === "♖") {
        //esta a la derecha
        if (kingNumBox - attackingNumBox <= 7) {
          movesToIntercept = interceptMovesMinor(
            kingNumBox,
            attackingNumBox,
            1
          );
        } else {
          //esta abajo
          movesToIntercept = interceptMovesMinor(
            kingNumBox,
            attackingNumBox,
            8
          );
        }
      }
    }
    console.log(movesToIntercept);
  }
}
