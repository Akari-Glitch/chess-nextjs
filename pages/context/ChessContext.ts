import React from "react";

export type ContextProps = {
  colorPlayer: string;
  setColorPlayer: (c: string) => void;
};
export const ChessContext = React.createContext<ContextProps>({
  colorPlayer: "",
  setColorPlayer: () => {},
});

export function useChess() {
  const context = React.useContext(ChessContext);

  if (!context) {
    throw new Error("error");
  }
  return context;
}
