import { useEffect } from "react";
import { TableStyles } from "../../../../styles/TableStyles";
import { selectBox } from "../handler/SelectPiece";
import { setTableBoxes, letters, lettersReverse } from "./dataTable";

interface Props {
  colorPlayer: string;
}

function Table({ colorPlayer }: Props) {
  const idBoxes = setTableBoxes(colorPlayer === "white" ? true : false);
  const orderLetters = colorPlayer === "white" ? letters : lettersReverse;

  // The next useEffect is to detect when the player clicks on a box
  useEffect(() => {
    const tbody: HTMLElement | null = document.getElementById("tbody");

    tbody?.addEventListener("click", (e: MouseEvent) => {
      const evt = e.target as HTMLTableCellElement;
      const isBoxOfTable = evt.className === "boxW" || evt.className === "boxB";
      if (isBoxOfTable) selectBox(evt);
    });

    return () => {
      tbody?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <TableStyles>
      <tbody id="tbody">
        {idBoxes.map((row, index) => {
          return (
            <tr
              id={String("row" + (index + 1))}
              key={String(index) + String(row)}
            >
              <td className="rowNumber" key={String(index) + "rowNumber"}>
                {index + 1}
              </td>

              {row.map((column) => {
                return (
                  <>
                    <td
                      className={String(column.color)}
                      id={String(column.id)}
                      key={String(column.id) + String(column.color)}
                    >
                      {column.content}
                    </td>
                  </>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <td></td>
          {orderLetters.map((letter) => {
            return (
              <td className="letter" key={String(letter)}>
                {letter}
              </td>
            );
          })}
        </tr>
      </tbody>
    </TableStyles>
  );
}

export default Table;
