export default function friendlyPiece(
  move: HTMLElement | null,
  friendly: string[]
): boolean {
  if (friendly.includes(String(move?.textContent))) {
    return false;
  } else {
    return true;
  }
}
