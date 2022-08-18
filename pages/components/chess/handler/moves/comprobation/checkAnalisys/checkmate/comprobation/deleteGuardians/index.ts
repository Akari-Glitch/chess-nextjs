import { pieceType } from "../../../../../../../../../interface/pieceType";
import checkAnalisys from "../../..";

export function deleteBlackGuardians(
  guardianPieces: pieceType,
  attackingBox: HTMLElement
): pieceType {
  let newGuardianPieces: pieceType = {
    pieces: [],
    box: [],
    moves: [],
  };

  guardianPieces.box.map((boxPiece, index) => {
    let box = boxPiece as HTMLElement;
    let attackingBoxRecovery: string = String(attackingBox?.textContent);
    let guardianBoxRecovery: string = String(box?.textContent);
    attackingBox.textContent = String(box?.textContent);
    box.textContent = "";
    let check = checkAnalisys();

    if (check[1] !== "BLACK_CHECK") {
      newGuardianPieces.pieces.push(guardianPieces.pieces[index]);
      newGuardianPieces.box.push(box);
      newGuardianPieces.moves.push(guardianPieces.moves[index]);
    }
    attackingBox.textContent = attackingBoxRecovery;
    box.textContent = guardianBoxRecovery;
  });
  return newGuardianPieces;
}

export function deleteWhiteGuardians(
  guardianPieces: pieceType,
  attackingBox: HTMLElement
): pieceType {
  let newGuardianPieces: pieceType = {
    pieces: [],
    box: [],
    moves: [],
  };

  guardianPieces.box.map((boxPiece, index) => {
    let box = boxPiece as HTMLElement;
    let attackingBoxRecovery: string = String(attackingBox?.textContent);
    let guardianBoxRecovery: string = String(box?.textContent);
    attackingBox.textContent = String(box?.textContent);
    box.textContent = "";
    let check = checkAnalisys();

    if (check[1] !== "WHITE_CHECK") {
      newGuardianPieces.pieces.push(guardianPieces.pieces[index]);
      newGuardianPieces.box.push(box);
      newGuardianPieces.moves.push(guardianPieces.moves[index]);
    }
    attackingBox.textContent = attackingBoxRecovery;
    box.textContent = guardianBoxRecovery;
  });
  return newGuardianPieces;
}
