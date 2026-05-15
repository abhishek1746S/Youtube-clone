import styles from "./Header.module.css";
import { useState } from "react";
import Navbar from '../Navbar/navbar';
function Header() {
  const[navbar,isnavbar]=useState(false);
  const[notify,isNotify]=useState(false);
  const[search,issearch]=useState(false);
  return (
    <>
   <header>
    <nav>
      <ul className={styles.header}>
        <li className="flex items-center text-3xl gap-2"><img className="ml-3" src="https://img.icons8.com/?size=50&id=QyYjooyvYGgV&format=png&color=000000" alt="youtube" />YouTube</li>
        <li className="ml-auto mr-5"><img onClick={()=>{isNotify(true),issearch(false)}} src="https://img.icons8.com/?size=40&id=eMfeVHKyTnkc&format=png&color=000000" alt="notification"/></li>
        <li className="mr-3"><img onClick={()=>{issearch(true),isNotify(false)}} src="https://img.icons8.com/?size=40&id=59878&format=png&color=000000" alt="search" /></li>
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

        {
          notify?<>
          <div className="w-full h-full fixed flex z-15 bg-blue-50">
            <div className="w-screen h-15 flex bg-amber-100 ">
          
                <div className="flex w-full items-center m-3 gap-5"><img onClick={()=>isNotify(false)} src="https://img.icons8.com/?size=40&id=89346&format=png&color=000000" alt="back" />
                <span className="text-2xl">Notification</span>
                <img className="ml-auto" onClick={()=>issearch(true)} src="https://img.icons8.com/?size=40&id=59878&format=png&color=000000" alt="search" />
                <span className="text-3xl cursor-pointer mr-4 ml-5">⋮</span>
                </div>
            </div>
          </div>
          </>:null
        }
        {
          search?<div className="w-full h-full fixed flex z-15 bg-blue-50">
            <div className="w-full h-15 inline-flex items-center gap-3">
              <img className="w-10 h-10" onClick={()=>issearch(false)} src="https://img.icons8.com/?size=50&id=89346&format=png&color=000000" alt="back" />
            <input className="w-80 h-12 border border-black p-1 pl-4 rounded-full" type="text" placeholder="Search YouTube"/>
            <img className="w-12 h-12" src="https://img.icons8.com/?size=50&id=85796&format=png&color=000000" alt="mic" />
            </div>
          </div>:null
        }
        </div>
    </>
  );
}

export default Header;