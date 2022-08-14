import { piecesType } from "../../../../../../interface/piecesType";
import { blackPieces, whitePieces } from "./../../../../table/dataTable";
import { checkAnalisysBlack } from "./checkAnalysisBlack";
import { checkAnalisysWhite } from "./checkAnalysisWhite";
import { detectCheck } from "./detectCheck";

export let piecesData: piecesType = {
  blackPieces: {
    piece: [],
    box: [],
    moves: [[]],
  },
  whitePieces: {
    piece: [],
    box: [],
    moves: [[]],
  },
  totalMovesWhite: [],
  totalMovesBlack: [],
};

export default function checkAnalisys(): string[] {
  let whiteMoves: Array<HTMLElement | null> = [];
  let blackMoves: Array<HTMLElement | null> = [];
  let check: string[];
  piecesData = {
    blackPieces: {
      piece: [],
      box: [],
      moves: [[]],
    },
    whitePieces: {
      piece: [],
      box: [],
      moves: [[]],
    },
    totalMovesWhite: [],
    totalMovesBlack: [],
  };

  for (let i = 1; i <= 64; i++) {
    let piece: string = String(document.getElementById("box" + i)?.textContent);
    let box: HTMLElement | null = document.getElementById("box" + i);
    let moves: Array<HTMLElement | null>;
    if (whitePieces.includes(piece)) {
      moves = [...checkAnalisysWhite(piece, box)];
      whiteMoves.push(...moves);
      piecesData.whitePieces.piece.push(piece);
      piecesData.whitePieces.box.push(box);
      piecesData.whitePieces.moves.push(moves);
    }
    if (blackPieces.includes(piece)) {
      moves = [...checkAnalisysBlack(piece, box)];
      blackMoves.push(...moves);
      piecesData.blackPieces.piece.push(piece);
      piecesData.blackPieces.box.push(box);
      piecesData.blackPieces.moves.push(moves);
    }
    piecesData.totalMovesWhite = whiteMoves;
    piecesData.totalMovesBlack = blackMoves;
  }

  /*La variable Check es un array de dos valores. La dinámica es la siguiente: Si round es true (es decir, es turno
    de las blancas), el primer valor del array nos hará saber si la piezas del cual es turno está en jaque o no.
    Así sabremos si validar o invalidar el movimiento después. 
    
    El segundo valor es para detectar si las piezas enemigas están en jaque y envíar un aviso.*/
  check = detectCheck(whiteMoves, blackMoves);
  return check;
}
