import React from 'react'
import styles from './shorts.module.css'
import Video from '../../assets/video/videoplayback.mp4'

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
          src={Video}
          autoPlay
          muted
          loop

          onClick={toggleVideo}
        />
      </div>

      <div className={styles.videoBox}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={Video}
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