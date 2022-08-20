import { piecesData } from "../../comprobation/checkAnalisys";
export function castling(
  castlingMoves: Array<HTMLElement | null>,
  colorPiece: boolean
) {
  let validate: boolean = true;

  for (let i = 0; i < castlingMoves.length; i++) {
    if (colorPiece && piecesData.totalMovesBlack.includes(castlingMoves[i])) {
      validate = false;
    }

    if (!colorPiece && piecesData.totalMovesWhite.includes(castlingMoves[i])) {
      validate = false;
    }
  }
  return validate;
}

export function moveTower(
  kingBox: HTMLElement,
  beforeKingBox: HTMLElement,
  colorPiece: boolean
) {
  const numKingBox = Number(kingBox.id.slice(3));
  const numBeforeKingBox = Number(beforeKingBox.id.slice(3));
  const towerWhiteShort = document.getElementById("box64") as HTMLElement;
  const towerWhiteLarge = document.getElementById("box57") as HTMLElement;
  const towerBlackShort = document.getElementById("box8") as HTMLElement;
  const towerBlackLarge = document.getElementById("box1") as HTMLElement;

  if (numBeforeKingBox + 2 == numKingBox) {
    const towerToMove = document.getElementById(
      "box" + (numKingBox - 1)
    ) as HTMLElement;
    if (colorPiece) {
      towerToMove.textContent = String(towerWhiteShort?.textContent);
      towerWhiteShort.textContent = "";
    } else {
      towerToMove.textContent = String(towerBlackShort?.textContent);
      towerBlackShort.textContent = "";
    }
  } else if (numBeforeKingBox - 2 == numKingBox) {
    const towerToMove = document.getElementById(
      "box" + (numKingBox + 1)
    ) as HTMLElement;

    if (colorPiece) {
      towerToMove.textContent = String(towerWhiteLarge?.textContent);
      towerWhiteLarge.textContent = "";
    } else {
      towerToMove.textContent = String(towerBlackLarge?.textContent);
      towerBlackLarge.textContent = "";
    }
  }
}
