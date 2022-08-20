import getElement from "../comprobation/getElement";
import { whatReturn } from "../comprobation/whatReturn";
import { whitePieces, blackPieces } from "./../../../table/dataTable";
import { moveComprobation } from "./comprobation";
export function kingMoves(
  toMove: HTMLElement | null,
  pieceBox: HTMLElement | null,
  colorPiece: boolean,
  required: string
): boolean | Array<HTMLElement | null> | undefined {
  let moves: Array<HTMLElement | null> = [];
  const numPieceBox: number = Number(pieceBox?.id.slice(3));
  const upNum: number = -8;
  const upRNum: number = -7;
  const upLNum: number = -9;
  const rightNum: number = 1;
  const leftNum: number = -1;
  const downNum: number = 8;
  const downRNum: number = 9;
  const downLNum: number = 7;
  const castlingLargeNum: number = -2;
  const castlingShortNum: number = 2;
  const friendly = colorPiece ? whitePieces : blackPieces;

  const up: HTMLElement | null = getElement(upNum, numPieceBox);
  const upR: HTMLElement | null = getElement(upRNum, numPieceBox);
  const upL: HTMLElement | null = getElement(upLNum, numPieceBox);
  const right: HTMLElement | null = getElement(rightNum, numPieceBox);
  const left: HTMLElement | null = getElement(leftNum, numPieceBox);
  const down: HTMLElement | null = getElement(downNum, numPieceBox);
  const downR: HTMLElement | null = getElement(downRNum, numPieceBox);
  const downL: HTMLElement | null = getElement(downLNum, numPieceBox);
  const castlingLarge: HTMLElement | null = getElement(
    castlingLargeNum,
    numPieceBox
  );
  const castlingShort: HTMLElement | null = getElement(
    castlingShortNum,
    numPieceBox
  );

  moves = moveComprobation(
    up,
    upR,
    upL,
    right,
    left,
    down,
    downR,
    downL,
    castlingShort,
    castlingLarge,
    colorPiece,
    numPieceBox,
    friendly
  );

  return whatReturn(required, toMove, moves);
}
