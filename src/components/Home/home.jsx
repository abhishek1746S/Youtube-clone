import React from 'react'
import styles from "./home.module.css";
import Video from './video.jsx'
const home = () => {
  return (
    <div className={styles.child}>
                  <Video/>
                  <Video/>
                  <Video/>
                </div>
            
  )
}

export default home;
