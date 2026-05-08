import styles from "./Header.module.css";
import { useState } from "react";
import Navbar from '../Navbar/navbar';
function Header() {
  return (
    <>
   <header>
    <nav>
      <ul className={styles.ulfl}>
        <li className="flex items-center text-3xl gap-2"><img className="ml-3" src="https://img.icons8.com/?size=45&id=QyYjooyvYGgV&format=png&color=000000" alt="youtube" />YouTube</li>
        <li className="ml-auto mr-5"><img src="https://img.icons8.com/?size=30&id=eMfeVHKyTnkc&format=png&color=000000" alt=""/></li>
        <li className="mr-3"><img src="https://img.icons8.com/?size=30&id=59878&format=png&color=000000" alt="" /></li>
      </ul>
    </nav>
    </header>
    <Navbar/>
    </>
  );
}

export default Header;