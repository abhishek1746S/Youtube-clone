import React from 'react'
import styles from "./Subscription.module.css";
import Video from '../Home/video.jsx';
const Subscription = () => {
  return (
    <>
              <div className={styles.parent1}>
                <ul>
                  <li className="flex items-center text-3xl gap-2" style={{border:"none"}}><img className="ml-3" src="https://img.icons8.com/?size=45&id=QyYjooyvYGgV&format=png&color=000000" alt="youtube" />YouTube</li>
                  <li className="ml-auto m-5">
                    <img src="https://img.icons8.com/?size=30&id=eMfeVHKyTnkc&format=png&color=000000"alt="notification"/>
                  </li>
                  <li className="m-5">
                    <img src="https://img.icons8.com/?size=30&id=59878&format=png&color=000000"alt="search"/>
                  </li>
                  </ul>
                  <div className="flex">
                  <div className={styles.subsciber}>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channhshel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    <div className="ml-5"><div></div><span className={styles.channelName}>channel-name</span></div>
                    </div>
                    <p className="text-xl m-2 mt-5" onClick={()=>isSublist(true)}>All</p>
                  </div>
                  <ul className={styles.list} >
                    <li>All</li>
                    <li>Today</li>
                    <li>Videos</li>
                    <li>Shorts</li>
                    <li>Live</li>
                    <li>Podcasts</li>
                    <li>Posts</li>
                    <li>Continue watching</li>
                    <li>Unwatched</li>
                    <li>Settings</li>
                  </ul>
                  <Video/>
                </div>
    </>
  )
}

export default Subscription;
