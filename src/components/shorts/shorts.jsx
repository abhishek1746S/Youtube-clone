import React from 'react'
import styles from './shorts.module.css'
import Shortvideo from '../shorts/shortvideo.jsx'
const shorts = () => {
  return (
    <div className={styles.child}>
       <Shortvideo/>
  <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
              <div className="inline-flex w-full  pointer-events-auto">
                <p className="mt-5 ml-5 text-3xl font-bold text-amber-50">Shorts</p>
                <div  className="mt-5 ml-auto text-3xl font-bold text-amber-50"><img src="https://img.icons8.com/?size=40&id=59878&format=png&color=FFFFFF" alt="search" /> </div>
                <div className="mt-5 mr-2 ml-3 text-3xl font-bold text-amber-50">︙</div>
              </div>
              
              <div className="relative flex  gap-5 mt-5  w-full  pointer-events-auto overflow-x-auto [scrollbar-width:none] shrink-0">
                <div className={styles.degin} ><img src="https://img.icons8.com/?size=30&id=reqYJP3X0f7Y&format=png&color=ffffff"alt="subscriptions" /> Subscription</div>
                <div className={styles.degin} ><img src="https://img.icons8.com/?size=30&id=7rBT6EnGLrx9&format=png&color=ffffff" alt="Live" />Live</div>
                <div className={styles.degin} ><img src="https://img.icons8.com/?size=30&id=4JL63cyi25HT&format=png&color=ffffff" alt="Lens" />Lens</div>
                <div className={styles.degin} ><img src="https://img.icons8.com/?size=30&id=bG4fHuMoS3fe&format=png&color=ffffff" alt="" />Trends</div>
              </div>
              
              <div className="text-amber-50 mt-auto mb-5px mr-5px ml-auto  pointer-events-auto">
                <img src="https://img.icons8.com/?size=45&id=SVZUo0RhRuHJ&format=png&color=ffffff" alt="" />Like
              </div>
              
              <div className="text-amber-50 mt-5 mb-5px mr-5px ml-auto  pointer-events-auto">
                <img src="https://img.icons8.com/?size=45&id=15957&format=png&color=ffffff" alt="" />Dislike
              </div>
              
              <div className="text-amber-50 mt-5 mb-5px mr-5px ml-auto  pointer-events-auto">
                <img src="https://img.icons8.com/?size=45&id=uMrGly1lK1sv&format=png&color=ffffff" alt="" />
              </div>
              
              <div className="text-amber-50 mt-5 mb-5px mr-5px ml-auto  pointer-events-auto">
                <img src="https://img.icons8.com/?size=45&id=11504&format=png&color=ffffff" alt="" />Share
              </div>
              
              <div className=" text-amber-50 mt-5 ml-auto flex flex-col items-center  pointer-events-auto">
                <img src="https://img.icons8.com/?size=45&id=q7dpea8GYgNa&format=png&color=ffffff"alt="remix"/>Remix
              </div>
              
              <div className="text-amber-50  mt-5 mb-16 mr-5px ml-auto  pointer-events-auto">
                <img src="https://img.icons8.com/?size=45&id=4knsel5keE42&format=png&color=ffffff" alt="music" />
              </div>
           
            <div className="absolute bottom-5 left-3 flex items-center text-white gap-2  pointer-events-auto">
            </div>
            <>
          <div className="absolute bottom-22 left-2 flex items-center text-white gap-2  pointer-events-auto">
            <div className="w-16 h-16 rounded-full bg-gray-600"></div>
                 <p className="text-[18px]">@channel-name</p>
            <div className="p-2 pl-6 pr-6 border text-black bg-amber-50 rounded-4xl  pointer-events-auto">Subscribe</div>
          </div>
          <div className="absolute bottom-16 ml-5 text-amber-50 text-[18px]">write caption of video</div>
          </>
          </div>
      </div>      
  )
}

export default shorts
