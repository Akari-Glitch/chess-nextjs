import styled from "@emotion/styled";

export const ContentStyles = styled.main`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  main {
    width: 90%;
  }

  @media only screen and (min-width: 1024px) {
    main {
      width: 85%;
    }
  }
`;
