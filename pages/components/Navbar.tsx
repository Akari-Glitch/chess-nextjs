/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { NavbarStyles } from "../../styles/NavbarStyles";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);
  return (
    <NavbarStyles>
      <div className="contain">
        <div className="contain-title">
          <h1 className="title">
            Chess
            <Image
              className="logo-chess"
              src="/king-logo.svg"
              width="35px"
              height="35px"
            ></Image>
          </h1>
        </div>
        <div className="menu-logo-contain" onClick={showMenu}>
          <Image
            className="menu-logo"
            src="/menu-logo.png"
            width="25px"
            height="25px"
          ></Image>
        </div>

        <ul
          className={menu ? "show-menu menu" : "hidden-menu menu"}
          onClick={showMenu}
        >
          <li className="li-link">
            <Link href="/">Inicio</Link>
          </li>
          <li className="li-link">
            <Link href="/Home">Jugar</Link>
          </li>
        </ul>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;
