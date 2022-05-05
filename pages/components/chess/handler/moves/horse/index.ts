import { blackPieces, whitePieces } from "./../../../table/dataTable";
import getElement from "../comprobation/getElement";
import { moveComprobation } from "./comprobation";
import { whatReturn } from "../comprobation/whatReturn";

export function horseMoves(
  toMove: HTMLElement | null,
  pieceBox: HTMLElement | null,
  colorPiece: boolean,
  required: string
): boolean | Array<HTMLElement | null> | undefined {
  let moves: Array<HTMLElement | null> = [];
  const numPieceBox: number = Number(pieceBox?.id.slice(3));
  const RULN: number = -15;
  const LULN: number = -17;
  const RUSN: number = -6;
  const LUSN: number = -10;
  const RDLN: number = 17;
  const LDLN: number = 15;
  const RDSN: number = 10;
  const LDSN: number = 6;

  const rightUpLong: HTMLElement | null = getElement(RULN, numPieceBox);
  const leftUpLong: HTMLElement | null = getElement(LULN, numPieceBox);
  const rightUpShort: HTMLElement | null = getElement(RUSN, numPieceBox);
  const leftUpshort: HTMLElement | null = getElement(LUSN, numPieceBox);
  const rightDownLong: HTMLElement | null = getElement(RDLN, numPieceBox);
  const leftDownLong: HTMLElement | null = getElement(LDLN, numPieceBox);
  const rightDownShort: HTMLElement | null = getElement(RDSN, numPieceBox);
  const leftDownShort: HTMLElement | null = getElement(LDSN, numPieceBox);

  const friendly = colorPiece ? whitePieces : blackPieces;
  moves = moveComprobation(
    rightUpLong,
    leftUpLong,
    rightUpShort,
    leftUpshort,
    rightDownLong,
    leftDownLong,
    rightDownShort,
    leftDownShort,
    numPieceBox,
    friendly
  );

  return whatReturn(required, toMove, moves);
}
