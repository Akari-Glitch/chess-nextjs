import { whatReturn } from "../comprobation/whatReturn";
import { addingMoves } from "./comprobation";

export default function towerMoves(
  toMove: HTMLElement | null,
  pieceBox: HTMLElement | null,
  colorPiece: boolean,
  required: string
): boolean | Array<HTMLElement | null> | undefined {
  let moves: Array<HTMLElement | null> = [];
  const numPieceBox: number = Number(pieceBox?.id.slice(3));
  let upDMoves: Array<HTMLElement | null> = [];
  let downDMoves: Array<HTMLElement | null> = [];
  let rightDMoves: Array<HTMLElement | null> = [];
  let leftDMoves: Array<HTMLElement | null> = [];
  const upD: number = -8;
  const downD: number = 8;
  const rightD: number = 1;
  const leftD: number = -1;

  upDMoves = addingMoves("UP", upD, colorPiece, numPieceBox);
  downDMoves = addingMoves("DOWN", downD, colorPiece, numPieceBox);
  rightDMoves = addingMoves("RIGHT", rightD, colorPiece, numPieceBox);
  leftDMoves = addingMoves("LEFT", leftD, colorPiece, numPieceBox);
  moves = [...upDMoves, ...downDMoves, ...rightDMoves, ...leftDMoves];

  return whatReturn(required, toMove, moves);
}
