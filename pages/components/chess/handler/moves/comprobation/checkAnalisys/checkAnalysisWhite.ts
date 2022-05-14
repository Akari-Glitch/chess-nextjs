import { whitePieces } from "../../../../table/dataTable";
import bishopMoves from "../../bishop";
import { horseMoves } from "../../horse";
import { kingMoves } from "../../king";
import pawnMoves from "../../pawnMove";
import { queenMoves } from "../../queen";
import towerMoves from "../../tower";

/*La funcion CheckAnalisysWhite detecta si alguna pieza blanca está haciendo jaque al rey negro.
Recoge los movimientos de cada pieza blanca para ver cual movimiento intercepta al rey negro*/
export function checkAnalisysWhite(
  piece: string,
  box: HTMLElement | null
): Array<HTMLElement | null> {
  switch (piece) {
    //pawn
    case whitePieces[0]:
      return pawnMoves(null, box, true, "MOVES") as Array<HTMLElement | null>;
    //tower
    case whitePieces[1]:
      return towerMoves(null, box, true, "MOVES") as Array<HTMLElement | null>;
    //horse
    case whitePieces[2]:
      return horseMoves(null, box, true, "MOVES") as Array<HTMLElement | null>;
    //bishop
    case whitePieces[3]:
      return bishopMoves(null, box, true, "MOVES") as Array<HTMLElement | null>;
    //queen
    case whitePieces[4]:
      return queenMoves(null, box, true, "MOVES") as Array<HTMLElement | null>;
    //king
    case whitePieces[5]:
      return kingMoves(null, box, true, "MOVES") as Array<HTMLElement | null>;
    default:
      return [];
  }
}
