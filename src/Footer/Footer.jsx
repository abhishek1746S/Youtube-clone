import React from "react";
import styles from "./Footer.module.css";
import { useState } from "react";
const Footer = () => {
  const [accountlogin, setAccountlogin] = React.useState(false);
  return (
    <>
      <footer className="flex mt-auto">
        <ul className={styles.ulfl}>
          <li>
            <img
              src="https://img.icons8.com/?size=45&id=86527&format=png&color=000000"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://img.icons8.com/?size=45&id=ajczeHCWXbyR&format=png&color=000000"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://img.icons8.com/?size=45&id=24717&format=png&color=000000"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://img.icons8.com/?size=45&id=reqYJP3X0f7Y&format=png&color=000000"
              alt=""
            />
          </li>
          <li>
            <img
              onClick={() => setAccountlogin(true)}
              src="https://img.icons8.com/?size=45&id=85050&format=png&color=000000"
              alt=""
            />
          </li>
        </ul>
      </footer>
      {accountlogin ? (
        <div className={styles.parent}>
          <ul>
            <li className="m-5">Accounts</li>
            <li className="ml-auto m-5">
              <img
                src="https://img.icons8.com/?size=30&id=eMfeVHKyTnkc&format=png&color=000000"
                alt=""
              />
            </li>
            <li className="m-5">
              <img
                src="https://img.icons8.com/?size=30&id=59878&format=png&color=000000"
                alt=""
              />
            </li>
            <li className="m-5">
              <img
                src="https://img.icons8.com/?size=30&id=364&format=png&color=000000"
                alt=""
              />
            </li>
          </ul>
          <div className={styles.account}>
            <div className={styles.avatar}>A</div>
            <div className={styles.info}>
              <h3>Abhishek kumar</h3>
              <p>@AbhishekKumar-i8h.view channel</p>
            </div>
          </div>
          <p className="text-2xl m-5">History</p>
          <div className={styles.history}>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
          </div>

          <p className="text-2xl m-5">playlist</p>
          <div className={styles.history}>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
            <div><div className={styles.card}></div><p className="ml-2">hreek</p></div>
          </div>
          <div className={styles.nav}>
          <div className="m-5 mt-8"><img src="https://img.icons8.com/?size=50&id=EFNMFqL2CsU7&format=png&color=000000" alt="" />Your videos</div>
          <div  className="m-5 mt-8"><img src="https://img.icons8.com/?size=50&id=14100&format=png&color=000000" alt="" />Downloads</div>
          <div className="m-5 mt-8"><img src="https://img.icons8.com/?size=50&id=2998&format=png&color=000000" alt="" />Films</div>
          <div className="m-5 mt-8"><img src="https://img.icons8.com/?size=50&id=4TvpjGq1YxO5&format=png&color=000000" alt="" />Courses</div>
          <div className="inline-flex m-5 mt-8 mb-20"><img src="https://img.icons8.com/?size=50&id=37325&format=png&color=000000" alt="" /><p className="text-center">Get YouTube Premium</p></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
