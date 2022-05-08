export function checkKingWhiteComprobation(
  blackMoves: Array<HTMLElement | null>
): string {
  for (let i = 0; i < blackMoves.length; i++) {
    let kingWhite: string = String(blackMoves[i]?.textContent);
    if (kingWhite === "♔") {
      return "WHITE_CHECK";
    }
  }
  return "NONE_CHECK";
}

export function checkKingBlackComprobation(
  whiteMoves: Array<HTMLElement | null>
): string {
  for (let i = 0; i < whiteMoves.length; i++) {
    let kingBlack: string = String(whiteMoves[i]?.textContent);
    if (kingBlack === "♚") {
      return "BLACK_CHECK";
    }
  }
  return "NONE_CHECK";
}
