import { useContext } from "react";
import { SelectColorStyles } from "../../../styles/SelectColorStyles";
import { ChessContext } from "../../context/ChessContext";
import Table from "./table/Table";
function SelectColor() {
  const { colorPlayer, setColorPlayer } = useContext(ChessContext);
  return (
    <>
      {colorPlayer === "" ? (
        <SelectColorStyles>
          <button onClick={() => setColorPlayer("white")}>White</button>
          <button onClick={() => setColorPlayer("black")}>Black</button>
        </SelectColorStyles>
      ) : (
        <Table colorPlayer={colorPlayer}></Table>
      )}
      <SelectColorStyles></SelectColorStyles>
    </>
  );
}

export default SelectColor;
