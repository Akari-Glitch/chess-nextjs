import getElement from "../comprobation/getElement";
import { whatReturn } from "../comprobation/whatReturn";
import { moveComprobation } from "./comprobation";
export default function pawnMoves(
  toMove: HTMLElement | null,
  pieceBox: HTMLElement | null,
  colorPiece: boolean,
  required: string
): boolean | Array<HTMLElement | null> | undefined {
  let moves: Array<HTMLElement | null>;
  const numPieceBox: number = Number(pieceBox?.id.slice(3));
  const normalMov: number = colorPiece ? -8 : 8;
  const doubleMov: number = colorPiece ? -16 : 16;
  const eatMov: number[] = colorPiece ? [-9, -7] : [9, 7];

  const normalMovElem: HTMLElement | null = getElement(normalMov, numPieceBox);
  const doubleMovElem: HTMLElement | null = getElement(doubleMov, numPieceBox);
  const eatMovElem: Array<HTMLElement | null> = [
    getElement(eatMov[0], numPieceBox),
    getElement(eatMov[1], numPieceBox),
  ];

  moves = moveComprobation(
    normalMovElem,
    doubleMovElem,
    eatMovElem[0],
    eatMovElem[1],
    colorPiece,
    numPieceBox
  );

  return whatReturn(required, toMove, moves);
}
