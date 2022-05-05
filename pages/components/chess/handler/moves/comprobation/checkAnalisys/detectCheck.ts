export function detectCheck(
  whiteMoves: Array<HTMLElement | null>,
  blackMoves: Array<HTMLElement | null>
) {
  for (let i = 0; i < whiteMoves.length; i++) {
    let piece: string = String(whiteMoves[i]?.textContent);
    if (piece === "♚") {
      alert("rey negro en jaque");
      break;
    }
  }
}
