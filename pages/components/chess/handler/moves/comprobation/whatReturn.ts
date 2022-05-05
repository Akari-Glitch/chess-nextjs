export function whatReturn(
  required: string,
  toMove: HTMLElement | null,
  moves: Array<HTMLElement | null>
): boolean | Array<HTMLElement | null> | undefined {
  if (required === "MOVE_VALIDATED") {
    if (moves.includes(toMove)) {
      return true;
    } else {
      return false;
    }
  } else if (required === "MOVES") {
    return moves;
  }
}
