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

              <td
                className={String(row[0].color)}
                id={String(row[0].id)}
                key={String(row[0].id) + String(row[0].color)}
              >
                {row[0].content}
              </td>
              <td
                className={String(row[1].color)}
                id={String(row[1].id)}
                key={String(row[1].id) + String(row[1].color)}
              >
                {row[1].content}
              </td>

              <td
                className={String(row[2].color)}
                id={String(row[2].id)}
                key={String(row[2].id) + String(row[2].color)}
              >
                {row[2].content}
              </td>
              <td
                className={String(row[3].color)}
                id={String(row[3].id)}
                key={String(row[3].id) + String(row[3].color)}
              >
                {row[3].content}
              </td>
              <td
                className={String(row[4].color)}
                id={String(row[4].id)}
                key={String(row[4].id) + String(row[4].color)}
              >
                {row[4].content}
              </td>
              <td
                className={String(row[5].color)}
                id={String(row[5].id)}
                key={String(row[5].id) + String(row[5].color)}
              >
                {row[5].content}
              </td>
              <td
                className={String(row[6].color)}
                id={String(row[6].id)}
                key={String(row[6].id) + String(row[6].color)}
              >
                {row[6].content}
              </td>
              <td
                className={String(row[7].color)}
                id={String(row[7].id)}
                key={String(row[7].id) + String(row[7].color)}
              >
                {row[7].content}
              </td>
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
