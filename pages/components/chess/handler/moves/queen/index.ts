import bishopMoves from "../bishop";
import { whatReturn } from "../comprobation/whatReturn";
import towerMoves from "../tower";
export function queenMoves(
  toMove: HTMLElement | null,
  pieceBox: HTMLElement | null,
  colorPiece: boolean,
  required: string
): boolean | Array<HTMLElement | null> | undefined {
  let moves: Array<HTMLElement | null> = [];

  moves = [
    ...(bishopMoves(
      toMove,
      pieceBox,
      colorPiece,
      "MOVES"
    ) as Array<HTMLElement | null>),
    ...(towerMoves(
      toMove,
      pieceBox,
      colorPiece,
      "MOVES"
    ) as Array<HTMLElement | null>),
  ];

  return whatReturn(required, toMove, moves);
}
