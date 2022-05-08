import { round } from "../../../round";
import {
  checkKingBlackComprobation,
  checkKingWhiteComprobation,
} from "./comprobation";

export function detectCheck(
  whiteMoves: Array<HTMLElement | null>,
  blackMoves: Array<HTMLElement | null>
): string[] {
  let checkKingWhite: string;
  let checkKingBlack: string;

  checkKingWhite = checkKingWhiteComprobation(blackMoves);
  checkKingBlack = checkKingBlackComprobation(whiteMoves);

  return round
    ? [checkKingWhite, checkKingBlack]
    : [checkKingBlack, checkKingWhite];
}
