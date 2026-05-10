import React from "react";
import styles from "./Footer.module.css";
import { useState } from "react";
import Subscription from "./subscrption";
import Account from "./account.jsx";
import Shorts from './shorts.jsx'
const Footer = () => {
  const[shorts,isshorts]=useState(false);
  const [subscription, setSubscription] = useState(false);
  const [accountlogin, setAccountlogin] = React.useState(false);
  const[sublist,isSublist]=useState(false);
  return (
    <>
      <footer className="flex mt-auto">
        <ul className={styles.parent}>
          <li>
            <img onClick={()=>{isshorts(false),setSubscription(false),setAccountlogin(false)}} src="https://img.icons8.com/?size=45&id=86527&format=png&color=000000" alt="Home"/>
          </li>
          <li>
            <img onClick={()=>{isshorts(true),setSubscription(false),setAccountlogin(false)}} src="https://img.icons8.com/?size=45&id=ajczeHCWXbyR&format=png&color=000000"alt="shorts"/>
          </li>
          <li>
            <img onClick={()=>{isshorts(false),setSubscription(false),setAccountlogin(false)}} src="https://img.icons8.com/?size=45&id=24717&format=png&color=000000"alt="upload"/>
          </li>
          <li>
            <img onClick={()=>{isshorts(false),setSubscription(true),setAccountlogin(false)}}src="https://img.icons8.com/?size=45&id=reqYJP3X0f7Y&format=png&color=000000"alt="subscription"/>
          </li>
          <li>
            <img onClick={() =>{isshorts(false), setAccountlogin(true),setSubscription(false)}} src="https://img.icons8.com/?size=45&id=85050&format=png&color=000000"alt="account"/>
          </li>
        </ul>
      </footer>
      {/* shorts jsx code below */}
        {
            shorts?<Shorts/>:null
        }

      {/* subscription jsx code below */}
        {
          subscription ? <><Subscription/></> : null
        }

       {/* setaccount login jsx code below  */}
        {
          accountlogin ? <Account/>: null
        }
       
    </>
  );
};

export default Footer;
