import { pieceType } from "./../../../../../../../../interface/pieceType";
import { piecesData } from "../..";
import { interceptMovesMajor, interceptMovesMinor } from "./interceptMoves";
import { deleteBlackGuardians } from "./deleteGuardians";

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

  let filterGuardianPieces: pieceType = {
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
    const parentAttacking = attackingPieces.box[0]?.parentNode;
    const parentKingBox = kingBox?.parentNode;

    let movesToIntercept: Array<HTMLElement> = [];
    // la pieza que ataca esta arriba o a la izquierda
    let count: number = 0;

    if (
      attackingPieces.pieces[0] === "♝" ||
      attackingPieces.pieces[0] === "♛" ||
      attackingPieces.pieces[0] === "♜"
    ) {
      if (attackingNumBox > kingNumBox) {
        //la pieza esta arriba a la derecha o a arriba a la izquierda
        if (
          attackingPieces.pieces[0] === "♝" ||
          attackingPieces.pieces[0] === "♛"
        ) {
          count = 0;
          for (let i = kingNumBox; i < attackingNumBox; i += 7) {
            count += 7;
          }
          if (kingNumBox + count === attackingNumBox) {
            movesToIntercept = interceptMovesMajor(
              kingNumBox,
              attackingNumBox,
              7
            );
          }
          count = 0;
          for (let i = kingNumBox; i < attackingNumBox; i += 9) {
            count += 9;
          }

          if (kingNumBox + count === attackingNumBox) {
            movesToIntercept = interceptMovesMajor(
              kingNumBox,
              attackingNumBox,
              9
            );
          }
        }

        //////
        if (
          attackingPieces.pieces[0] === "♜" ||
          attackingPieces.pieces[0] === "♛"
        ) {
          //esta a la izquierda
          count = 0;
          for (let i = kingNumBox; i < attackingNumBox; i++) {
            count++;
            if (count === 7) break;
          }
          if (
            kingNumBox + count === attackingNumBox &&
            parentAttacking == parentKingBox
          ) {
            movesToIntercept = interceptMovesMajor(
              kingNumBox,
              attackingNumBox,
              1
            );
          }

          count = 0;
          for (let i = kingNumBox; i < attackingNumBox; i += 8) {
            count += 8;
          }
          if (kingNumBox + count === attackingNumBox) {
            //esta arriba
            movesToIntercept = interceptMovesMajor(
              kingNumBox,
              attackingNumBox,
              8
            );
          }
        }
      }

      // la pieza que ataca esta abajo o a la derecha
      if (attackingNumBox < kingNumBox) {
        if (
          attackingPieces.pieces[0] === "♝" ||
          attackingPieces.pieces[0] === "♛"
        ) {
          count = 0;
          for (let i = attackingNumBox; i < kingNumBox; i += 7) {
            count += 7;
          }

          if (attackingNumBox + count === kingNumBox) {
            movesToIntercept = interceptMovesMinor(
              kingNumBox,
              attackingNumBox,
              7
            );
          }
          count = 0;
          for (let i = attackingNumBox; i < kingNumBox; i += 9) {
            count += 9;
          }
          if (attackingNumBox + count === kingNumBox) {
            movesToIntercept = interceptMovesMinor(
              kingNumBox,
              attackingNumBox,
              9
            );
          }
        }
        if (
          attackingPieces.pieces[0] === "♜" ||
          attackingPieces.pieces[0] === "♛"
        ) {
          //esta a la derecha
          count = 0;
          for (let i = attackingNumBox; i < kingNumBox; i++) {
            count++;
            if (count === 7) break;
          }
          if (
            attackingNumBox + count === kingNumBox &&
            parentAttacking == parentKingBox
          ) {
            movesToIntercept = interceptMovesMinor(
              kingNumBox,
              attackingNumBox,
              1
            );
          }
          count = 0;
          for (let i = attackingNumBox; i < kingNumBox; i += 8) {
            count += 7;
          }
          if (attackingNumBox + count === kingNumBox) {
            //esta abajo
            movesToIntercept = interceptMovesMinor(
              kingNumBox,
              attackingNumBox,
              8
            );
          }
        }
      }
    } else {
      movesToIntercept.push(attackingPieces.box[0] as HTMLElement);
    }

    piecesData.blackPieces.moves.map((moves, index) => {
      let add: boolean = false;
      movesToIntercept.map((move) => {
        if (moves.includes(move)) {
          add = true;
        }
      });
      if (add && piecesData.blackPieces.piece[index - 1] !== "♔") {
        guardianPieces.pieces.push(piecesData.blackPieces.piece[index - 1]);
        guardianPieces.box.push(piecesData.blackPieces.box[index - 1]);
        guardianPieces.moves.push(moves);
      }
      add = false;
    });
    filterGuardianPieces = deleteBlackGuardians(
      guardianPieces,
      attackingPieces.box[0] as HTMLElement
    );

    if (filterGuardianPieces.pieces.length === 0 && movesKing.length === 0) {
      alert("jaque mate");
    }
  }
}
