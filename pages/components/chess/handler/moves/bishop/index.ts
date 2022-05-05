import { whatReturn } from "../comprobation/whatReturn";
import { addingMoves } from "./comprobation";

export default function bishopMoves(
  toMove: HTMLElement | null,
  pieceBox: HTMLElement | null,
  colorPiece: boolean,
  required: string
): boolean | Array<HTMLElement | null> | undefined {
  let moves: Array<HTMLElement | null> = [];
  const numPieceBox: number = Number(pieceBox?.id.slice(3));
  let upRightDMoves: Array<HTMLElement | null> = [];
  let upLeftDMoves: Array<HTMLElement | null> = [];
  let downRightDMoves: Array<HTMLElement | null> = [];
  let downLeftDMoves: Array<HTMLElement | null> = [];

  const upDR = -7;
  const upDL = -9;
  const downDR = 9;
  const downDL = 7;

  upRightDMoves = addingMoves("UPR", upDR, colorPiece, numPieceBox);
  upLeftDMoves = addingMoves("UPL", upDL, colorPiece, numPieceBox);
  downRightDMoves = addingMoves("DOWNR", downDR, colorPiece, numPieceBox);
  downLeftDMoves = addingMoves("DOWNL", downDL, colorPiece, numPieceBox);

  moves = [
    ...upRightDMoves,
    ...upLeftDMoves,
    ...downRightDMoves,
    ...downLeftDMoves,
  ];

  return whatReturn(required, toMove, moves);
}
