import { blackPieces } from "../../../../table/dataTable";
import bishopMoves from "../../bishop";
import { horseMoves } from "../../horse";
import { kingMoves } from "../../king";
import pawnMoves from "../../pawnMove";
import { queenMoves } from "../../queen";
import towerMoves from "../../tower";

/*La funcion CheckAnalisysWhite detecta si alguna pieza negra está haciendo jaque al rey blanco.
Recoge los movimientos de cada pieza negra para ver cual movimiento intercepta al rey blanco*/
export function checkAnalisysBlack(
  piece: string,
  box: HTMLElement | null
): Array<HTMLElement | null> {
  switch (piece) {
    //pawn
    case blackPieces[0]:
      return pawnMoves(null, box, false, "MOVES") as Array<HTMLElement | null>;
    //tower
    case blackPieces[1]:
      return towerMoves(null, box, false, "MOVES") as Array<HTMLElement | null>;
    //horse
    case blackPieces[2]:
      return horseMoves(null, box, false, "MOVES") as Array<HTMLElement | null>;
    //bishop
    case blackPieces[3]:
      return bishopMoves(
        null,
        box,
        false,
        "MOVES"
      ) as Array<HTMLElement | null>;
    //queen
    case blackPieces[5]:
      return queenMoves(null, box, false, "MOVES") as Array<HTMLElement | null>;
    //king
    case blackPieces[4]:
      return kingMoves(null, box, false, "MOVES") as Array<HTMLElement | null>;
    default:
      return [];
  }
}
