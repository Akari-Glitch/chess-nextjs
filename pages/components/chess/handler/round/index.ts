import checkAnalisys from "../moves/comprobation/checkAnalisys";
import { checkmate } from "../moves/comprobation/checkAnalisys/checkmate";
import { resetProtectedPieces } from "./../moves/comprobation/protectedPieces";
// if round is true will be the turn of whites or if round is false will be turn of blacks
export let round = true;
export function roundChange(): boolean {
  let check = checkAnalisys();

  checkmate(check[1]);
  if (check[0] === "NONE_CHECK") {
    if (check[1] !== "NONE_CHECK") {
      alert(check[1]);
    }
    round = !round;
    resetProtectedPieces();
    return true;
  } else {
    return false;
  }
}
