import { piecesData } from "../..";
import { pieceType } from "./../../../../../../../../interface/pieceType";

/*
esta funcion se encargara de encontrar las posiciones de las piezas que amenazan al rey blanco
luego encontrara si hay forma de interceptar a la pieza que lo amenaza
 
*/
export default function checkMateToWhite(
  movesKing: Array<HTMLElement | null>,
  kingBox: HTMLElement | null
) {
  let { piece, box, moves } = piecesData.blackPieces;
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
  // si hay dos piezas amenazando al rey y el rey no tiene movimientos, es jaque mate
  if (attackingPieces.pieces.length > 1 && movesKing.length === 0) {
    alert("Jaque mate, blancas pierden");
  } else if (attackingPieces.pieces.length === 1) {
  }
}
