import bishopMoves from "../../bishop";
import { horseMoves } from "../../horse";
import { kingMoves } from "../../king";
import pawnMoves from "../../pawnMove";
import { queenMoves } from "../../queen";
import towerMoves from "../../tower";
import { blackPieces, whitePieces } from "./../../../../table/dataTable";
import { detectCheck } from "./detectCheck";
export default function checkAnalisys() {
  let whiteMoves: Array<HTMLElement | null> = [];
  let blackMoves: Array<HTMLElement | null> = [];

  for (let i = 1; i <= 64; i++) {
    let piece: string = String(document.getElementById("box" + i)?.textContent);
    let box: HTMLElement | null = document.getElementById("box" + i);
    if (whitePieces.includes(piece)) {
      whiteMoves.push(...checkAnalisysWhite(piece, box));
    }
    if (blackPieces.includes(piece))
      blackMoves.push(...checkAnalisysBlack(piece, box));
  }

  detectCheck(whiteMoves, blackMoves);
}

/*this function detects if the white pieces is checking the black king. The function will 
analyze the white pieces to detect their movements and if one movement intercepts with the black king*/
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

/*this function detects if the black pieces is checking the white king. The function will analyze the 
black pieces to detect their movements and if one movement intercepts with the white king king*/
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
