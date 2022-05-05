export default function getElement(
  numMov: number,
  numPieceBox: number
): HTMLElement | null {
  const numId = numPieceBox + numMov;
  return document.getElementById("box" + numId);
}
