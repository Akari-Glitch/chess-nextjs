export interface piecesType {
  blackPieces: {
    piece: string[];
    box: Array<HTMLElement | null>;
    moves: Array<Array<HTMLElement | null>>;
  };
  whitePieces: {
    piece: string[];
    box: Array<HTMLElement | null>;
    moves: Array<Array<HTMLElement | null>>;
  };
  totalMovesWhite: Array<HTMLElement | null>;
  totalMovesBlack: Array<HTMLElement | null>;
}
