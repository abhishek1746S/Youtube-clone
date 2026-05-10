import styles from "./Header.module.css";
import { useState } from "react";
import Navbar from '../Navbar/navbar';
function Header() {
  const[navbar,isnavbar]=useState(false);
  return (
    <>
   <header>
    <nav>
      <ul className={styles.ulfl}>
        <li className="flex items-center text-3xl gap-2"><img className="ml-3" src="https://img.icons8.com/?size=45&id=QyYjooyvYGgV&format=png&color=000000" alt="youtube" />YouTube</li>
        <li className="ml-auto mr-5"><img src="https://img.icons8.com/?size=30&id=eMfeVHKyTnkc&format=png&color=000000" alt="notification"/></li>
        <li className="mr-3"><img src="https://img.icons8.com/?size=30&id=59878&format=png&color=000000" alt="search" /></li>
      </ul>
    </nav>
    </header>
    <div>
          <ul className={styles.alltype}>
          <li onClick={()=>isnavbar(true)}><img className="h-7 w-7 shrink-0" src="https://img.icons8.com/?size=35&id=88004&format=png&color=000000" alt="" /> </li>
          <li>All</li>
          <li>New to you</li>
          <li>Hyped</li>
          <li>News</li>
          <li>Gaming</li>
          <li>Music</li>
          <li>Union public service conmmision</li>
          <li>Podcasts</li>
          <li>Mixes</li>
          <li>Software Engineering</li>
          <li>Free Fire India</li>
          <li>Live</li>
          <li>Film criticms</li>
          <li>Comic books</li>
          <li>Stategies</li>
          <li>Indian pop music</li>
          <li>Mobile Phone</li>
          <li>Dramedy</li>
          <li>Recently uploaded</li>
          <li>Watched</li>
          <li>Posts</li>
          <li>Send feedback</li>
        </ul>
        {
          navbar&&(<div className={styles.overlay} onClick={()=>isnavbar(false)}></div>)
        }
        {
          navbar?<Navbar/>:null
        }
        </div>
    </>
  );
}

export default Header;