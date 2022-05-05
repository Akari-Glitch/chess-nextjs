import checkAnalisys from "../moves/comprobation/checkAnalisys";

// if round is true will be the turn of whites or if round is false will be turn of blacks
export let round = true;
export function roundChange(): void {
  checkAnalisys();
  round = !round;
}
