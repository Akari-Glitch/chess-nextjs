import styled from "@emotion/styled";

export const TableStyles = styled.table`
  border-spacing: 0;
  user-select: none;

  td {
    width: 40px;
    height: 40px;
  }

  .boxW,
  .boxB {
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }

  #row1:second-child {
    border-top-left-radius: 10px;
    background: red;
  }

  #row1:last-child {
    border-top-right-radius: 10px;
  }
  #row8:second-child {
    border-bottom-left-radius: 10px;
  }
  #row8:last-child {
    border-bottom-right-radius: 10px;
  }

  .rowNumber {
    text-align: center;
  }
  .boxW {
    background: rgb(238, 238, 210);
  }

  .boxB {
    background: rgb(118, 150, 86);
  }

  .letter {
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    td {
      height: 60px;
      width: 60px;
    }

    .boxW,
    .boxB {
      text-align: center;
      font-size: 40px;
    }

    @media only screen and (min-width: 1024px) {
      td {
        height: 75px;
        width: 75px;
      }
      .boxW,
      .boxB {
        text-align: center;
        font-size: 55px;
      }
    }
  }
`;
