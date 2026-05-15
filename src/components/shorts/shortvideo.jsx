import React from 'react'
import styles from './shorts.module.css'
import Video1 from '../../assets/video/videoplayback.mp4'
import Video2 from '../../assets/video/videoplayback (2).mp4'
const Shortvideo = () => {

  const toggleVideo = (e) => {

    const video = e.target

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <div className={styles.videoContainer}>

      <div className={styles.videoBox}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={Video1}
          autoPlay
          muted
          loop

          onClick={toggleVideo}
        />
      </div>

      <div className={styles.videoBox}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={Video2}
          autoPlay
          muted
          loop

          onClick={toggleVideo}
        />
      </div>

    </div>
  )
}

export default Shortvideo