import { protectedPieces } from "./protectedPieces";
export default function friendlyPiece(
  move: HTMLElement | null,
  friendly: string[]
): boolean {
  if (friendly.includes(String(move?.textContent))) {
    protectedPieces.push(move);
    return false;
  } else {
    return true;
  }
}
