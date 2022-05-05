import { idBoxesType } from "../../../interface/idBoxesType";

export const whitePieces: string[] = [
  "♙",
  "♖",
  "♘",
  "♗",
  "♕",
  "♔",
  "♗",
  "♘",
  "♖",
  "♙",
];
export const blackPieces: string[] = [
  "♟",
  "♜",
  "♞",
  "♝",
  "♚",
  "♛",
  "♝",
  "♞",
  "♜",
  "♟",
];
export const letters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const lettersReverse: string[] = [
  "h",
  "g",
  "f",
  "e",
  "d",
  "c",
  "b",
  "a",
];

//The next function set the id of the boxes in the chess table
export function setTableBoxes(colorPlayer: boolean) {
  let idBoxes: Array<Array<idBoxesType>> = [[], [], [], [], [], [], [], []];
  let count: number = colorPlayer ? 1 : 64;
  let color: boolean = false;
  let row = 0;

  for (let column = 0; column <= 7; column++) {
    idBoxes[row].push({
      id: "box" + count,
      color: color ? "boxW" : "boxB",
      content: "",
    });

    colorPlayer ? count++ : count--;
    color = !color;

    //this structure change to the next row and reset de columns. When there a eight rows, the for will finish
    if (column === 7 && row < 7) {
      color = !color;
      row++;
      column = -1;
    }
  }

  for (let i = 0; i <= 7; i++) {
    if (colorPlayer) {
      idBoxes[7][i].content = whitePieces[i + 1];
      idBoxes[6][i].content = whitePieces[0];
      idBoxes[0][i].content = blackPieces[8 - i];
      idBoxes[1][i].content = blackPieces[0];
    } else {
      idBoxes[7][i].content = blackPieces[i + 1];
      idBoxes[6][i].content = blackPieces[0];
      idBoxes[0][i].content = whitePieces[8 - i];
      idBoxes[1][i].content = whitePieces[0];
    }
  }

  return idBoxes;
}
