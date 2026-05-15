import React, { useRef } from 'react'
import styles from "./video.module.css";
import Video1 from '../../assets/video/videoplayback (1).mp4'
import { useState } from 'react';
const Video = () => {
  const[videoclick, Isvideoclick] = useState(false);
  const videoRefs = useRef([])

  const handlePlay = (index) => {

    videoRefs.current.forEach((video, i) => {

      if (i !== index && video) {
        video.pause()
      }

    })

    videoRefs.current[index].play()
  }

  const videos = [
    {
      id: 1,
      src: Video1,
      title: "Video Title 1",
      channel: "@channel-name",
      views: "1M views",
      time: "10 days ago"
    },

    {
      id: 2,
      src: Video1,
      title: "Video Title 2",
      channel: "@channel-name",
      views: "500K views",
      time: "5 days ago"
    }
  ]

  return (
    <>
    <div className={styles.child}>

      {videos.map((item, index) => (

        <div onClick={()=>Isvideoclick(true)} className={styles.card} key={item.id}>

          {/* VIDEO PART */}
          <div className={styles.video}>

            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              controls
              className="w-full h-full object-cover"
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={(e) => e.target.pause()}
            />

          </div>

          {/* INFO PART */}
          <div className="flex">

            <div className="w-20">
              <div className="w-15 h-15 m-3 rounded-full bg-cyan-300">
              </div>
            </div>

            <div className="flex-col">

              <div className="inline-flex w-80 h-10">

                <p className="text-[20px]">
                  {item.title}
                </p>

                <p className="text-4xl ml-auto mr-4">
                  ⋮
                </p>

              </div>

              <div className="w-80 h-15 flex items-center gap-2 flex-wrap">

                <span className="text-[18px] ml-2">
                  {item.channel}
                </span>

                <span className="text-[18px] ml-2">
                  {item.views}
                </span>

                <span className="text-[18px] ml-2">
                  {item.time}
                </span>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
      
        {
  videoclick ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-black z-50">
      <p className="text-white text-3xl">
        hello
      </p>
    </div>
  ) : null
}
      
    </>
  )
}

export default Video