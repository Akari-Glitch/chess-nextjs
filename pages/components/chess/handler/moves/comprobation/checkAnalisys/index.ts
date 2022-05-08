import bishopMoves from "../../bishop";
import { horseMoves } from "../../horse";
import { kingMoves } from "../../king";
import pawnMoves from "../../pawnMove";
import { queenMoves } from "../../queen";
import towerMoves from "../../tower";
import { blackPieces, whitePieces } from "./../../../../table/dataTable";
import { detectCheck } from "./detectCheck";
export default function checkAnalisys(): string[] {
  let whiteMoves: Array<HTMLElement | null> = [];
  let blackMoves: Array<HTMLElement | null> = [];
  let check: string[];
  for (let i = 1; i <= 64; i++) {
    let piece: string = String(document.getElementById("box" + i)?.textContent);
    let box: HTMLElement | null = document.getElementById("box" + i);
    if (whitePieces.includes(piece)) {
      whiteMoves.push(...checkAnalisysWhite(piece, box));
    }
    if (blackPieces.includes(piece))
      blackMoves.push(...checkAnalisysBlack(piece, box));
  }
  /*La variable Check es un array de dos valores. La dinámica es la siguiente: Si round es true (es decir, es turno
    de las blancas), el primer valor del array nos hará saber si la piezas del cual es turno está en jaque o no.
    Así sabremos si validar o invalidar el movimiento después. 
    
    El segundo valor es para detectar si las piezas enemigas están en jaque y envíar un aviso.*/
  check = detectCheck(whiteMoves, blackMoves);
  return check;
}

/*La funcion CheckAnalisysWhite detecta si alguna pieza blanca está haciendo jaque al rey negro.
Recoge los movimientos de cada pieza blanca para ver cual movimiento intercepta al rey negro*/
function checkAnalisysWhite(
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

/*La funcion CheckAnalisysWhite detecta si alguna pieza negra está haciendo jaque al rey blanco.
Recoge los movimientos de cada pieza negra para ver cual movimiento intercepta al rey blanco*/
function checkAnalisysBlack(
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
