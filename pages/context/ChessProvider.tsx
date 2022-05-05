import { useMemo, useState } from "react";
import { ChessContext } from "./ChessContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ChessProvider = ({ children }: Props) => {
  const [colorPlayer, setColorPlayer] = useState("");

  return (
    <ChessContext.Provider value={{ colorPlayer, setColorPlayer }}>
      {children}
    </ChessContext.Provider>
  );
};
