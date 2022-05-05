import styled from "@emotion/styled";

export const NavbarStyles = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  height: 50px;
  background: white;
  justify-content: center;
  align-items: center;
  width: 100%;

  .contain {
    display: flex;
    align-items: center;
    width: 90%;
  }

  .contain-title {
    max-height: 40px;
    font-size: 20px;
    width: 75%;
  }
  h1 {
    top: 0;
  }

  .menu {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: black;
    top: 50px;
    list-style: none;
    transition: 0.4s;
  }

  .li-link {
    color: white;
  }
  .show-menu {
    left: 0;
    transform: translate(0);
  }

  .hidden-menu {
    right: 0;
    transform: translate(100%);
  }

  .menu-logo-contain {
    width: 25%;
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 1024px) {
    .menu-logo-contain {
      display: none;
    }
    .contain-title {
      width: 50%;
    }

    .hidden-menu {
      transform: translate(0);
    }
    .menu {
      display: flex;
      height: auto;
      position: relative;
      background: white;
      width: 50%;
      justify-content: space-around;
      position: initial;
    }

    .li-link {
      color: black;
    }
  }
`;
