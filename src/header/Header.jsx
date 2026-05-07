import styles from "./Header.module.css";
import { useState } from "react";
function Header() {
  const[navbar,isnavbar]=useState(false);
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
      navbar?<>
      <ul className={styles.navbar}>
        <li><img src="https://img.icons8.com/?size=45&id=QyYjooyvYGgV&format=png&color=000000" alt="youtube" />YouTube</li>
        <li><img src="https://img.icons8.com/?size=35&id=7xRLTHUE6Ms9&format=png&color=000000" alt="" />Shopping</li>
        <li><img src="https://img.icons8.com/?size=35&id=okYxB0vP0aEX&format=png&color=000000" alt="" />Music</li>
        <li><img src="https://img.icons8.com/?size=35&id=PW8vVvwgK4BN&format=png&color=000000" alt="" />Films</li>
        <li><img src="https://img.icons8.com/?size=35&id=23588&format=png&color=000000" alt="" />Hype</li>
        <li><img src="https://img.icons8.com/?size=35&id=P11A8uZXhwlm&format=png&color=000000" alt="" />Live</li>
        <li><img src="https://img.icons8.com/?size=35&id=51F0o6bWwYMt&format=png&color=000000" alt="" />Gaming</li>
        <li><img src="https://img.icons8.com/?size=35&id=Gqr5wm8a1hHn&format=png&color=000000" alt="" />News</li>
        <li><img src="https://img.icons8.com/?size=35&id=pEFIdMeifynl&format=png&color=000000" alt="" />Sport</li>
        <li><img src="https://img.icons8.com/?size=35&id=HaCbnQ1NFaY4&format=png&color=000000" alt="" />Course</li>
        <li><img src="https://img.icons8.com/?size=35&id=2989&format=png&color=000000" alt="" />Fashion & beauty</li>
        <li><img src="https://img.icons8.com/?size=35&id=12653&format=png&color=000000" alt="" />Podcasts</li>
        <li><img src="https://img.icons8.com/?size=35&id=78291&format=png&color=000000" alt="" />Playables</li>
        <li><img src="https://img.icons8.com/?size=35&id=QyYjooyvYGgV&format=png&color=000000" alt="" />YouTube Premium</li>
        <li><img src="https://img.icons8.com/?size=35&id=RffCjm5IOnEC&format=png&color=000000" alt="" />YouTube Studio</li>
        <li><img src="https://img.icons8.com/?size=35&id=V1cbDThDpbRc&format=png&color=000000" alt="" />YouTube Music</li>
        <li><img src="https://img.icons8.com/?size=35&id=szxM3fi4e37N&format=png&color=000000" alt="" />YouTube Kids</li>
        <li><img src="https://img.icons8.com/?size=35&id=rVwEVmVZ7qb7&format=png&color=000000" alt="" />YouTube Create</li>
        <li>Privacy Policy-Terms oof Service</li>
      </ul>
      </>:null
    }
   </>
  );
}

export default Header;