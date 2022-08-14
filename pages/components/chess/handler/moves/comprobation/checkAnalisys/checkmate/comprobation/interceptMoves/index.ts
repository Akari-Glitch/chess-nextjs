// solo si kingNumBox es menor a attackingNumBox
export function interceptMovesMajor(
  kingNumBox: number,
  attackingNumBox: number,
  direction: number
): Array<HTMLElement> {
  let interceptMoves: Array<HTMLElement> = [];

    for (let i = kingNumBox + direction; i <= attackingNumBox; i += direction) {
      let move = document.getElementById("box" + i) as HTMLElement;
      interceptMoves.push(move);
    }

  return interceptMoves;
}

export function interceptMovesMinor(
  kingNumBox: number,
  attackingNumBox: number,
  direction: number
): Array<HTMLElement> {
  let interceptMoves: Array<HTMLElement> = [];

  
    for (let i = attackingNumBox; i < kingNumBox; i += direction) {
      let move = document.getElementById("box" + i) as HTMLElement;
      interceptMoves.push(move);
    }
  
  return interceptMoves;
}
