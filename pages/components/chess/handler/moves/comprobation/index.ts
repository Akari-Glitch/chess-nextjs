import { whitePieces, blackPieces } from "../../../table/dataTable";
import bishopMoves from "../bishop";
import { horseMoves } from "../horse";
import { kingMoves } from "../king";
import pawnMoves from "../pawnMove";
import { queenMoves } from "../queen";
import towerMoves from "../tower";

export default function movesComprobation(
  piece: string,
  toMove: HTMLElement,
  pieceBox: HTMLElement
): boolean {
  //if colorPiece is true is because the piece is white and if colorpiece is false is because the piece is black
  const colorPiece: boolean = whitePieces.includes(String(piece));
  const MV = "MOVE_VALIDATED";
  switch (piece) {
    //pawn
    case whitePieces[0]:
      return pawnMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    case blackPieces[0]:
      return pawnMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    //tower
    case whitePieces[1]:
      return towerMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    case blackPieces[1]:
      return towerMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    //horse
    case whitePieces[2]:
      return horseMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    case blackPieces[2]:
      return horseMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    //bishop
    case whitePieces[3]:
      return bishopMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    case blackPieces[3]:
      return bishopMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    //queen
    case whitePieces[4]:
      return queenMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    case blackPieces[5]:
      return queenMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    //king
    case whitePieces[5]:
      return kingMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    case blackPieces[4]:
      return kingMoves(toMove, pieceBox, colorPiece, MV) as boolean;
    default:
      return false;
  }
}
