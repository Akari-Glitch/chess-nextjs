export function queenPawn(box: HTMLElement, piece: string) {
  const boxNum = Number(box.id.slice(3));
  if (piece === "♙" && boxNum < 9) {
    box.textContent = "♕";
  } else if (piece === "♟" && boxNum > 56) {
    box.textContent = "♛";
  }
}
