import checkAnalisys from "../moves/comprobation/checkAnalisys";
import { checkMate } from "../moves/comprobation/checkAnalisys/checkmate";

// if round is true will be the turn of whites or if round is false will be turn of blacks
export let round = true;
export function roundChange(): boolean {
  let check = checkAnalisys();
  checkMate(check[0]);
  if (check[0] === "NONE_CHECK") {
    if (check[1] !== "NONE_CHECK") {
      alert(check[1]);
    }
    round = !round;
    return true;
  } else {
    return false;
  }
}
