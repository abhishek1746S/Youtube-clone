import React from "react";
import styles from "./Footer.module.css";
import { useState } from "react";
import Account from "../components/account/Account.jsx";
import Shorts from '../components/shorts/shorts.jsx';
import Subscription from '../components/subscription/subscription.jsx';
import Home from '../components/Home/home.jsx';
const Footer = () => {
  const[shorts,isshorts]=useState(false);
  const [subscription, setSubscription] = useState(false);
  const [accountlogin, setAccountlogin] = React.useState(false);
  const[sublist,isSublist]=useState(false);
  const[home,ishome]=useState(true);
  return (
    <>
      <footer className="flex mt-auto">
        <ul className={styles.parent}>
          <li>
            <img onClick={()=>{ishome(true), isshorts(false),setSubscription(false),setAccountlogin(false)}} src="https://img.icons8.com/?size=45&id=86527&format=png&color=000000" alt="Home"/>
          </li>
          <li>
            <img onClick={()=>{ishome(false),isshorts(true),setSubscription(false),setAccountlogin(false)}} src="https://img.icons8.com/?size=45&id=ajczeHCWXbyR&format=png&color=000000"alt="shorts"/>
          </li>
          <li>
            <img onClick={()=>{ishome(false),isshorts(false),setSubscription(false),setAccountlogin(false)}} src="https://img.icons8.com/?size=45&id=24717&format=png&color=000000"alt="upload"/>
          </li>
          <li>
            <img onClick={()=>{ishome(false),isshorts(false),setSubscription(true),setAccountlogin(false)}}src="https://img.icons8.com/?size=45&id=reqYJP3X0f7Y&format=png&color=000000"alt="subscription"/>
          </li>
          <li>
            <img onClick={() =>{ishome(false),isshorts(false), setAccountlogin(true),setSubscription(false)}} src="https://img.icons8.com/?size=45&id=85050&format=png&color=000000"alt="account"/>
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
        {/* Home jsx code below  */}
        {
          home?<>
            <Home/>
          </>:null
        }   
    </>
  );
};

export default Footer;
