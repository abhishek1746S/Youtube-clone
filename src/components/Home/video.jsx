import React from 'react'
import styles from './video.module.css'
const video = () => {
  return (
    <>
        
        <div className={styles.card}>
                        <div className={styles.video}></div>
                        <div className="flex">
                          <div className="w-20">
                            <div className="w-15 h-15 m-3 rounded-full bg-cyan-300"></div>
                          </div>
                          <div className="flex-col">
                            <div className="inline-flex w-80 h-10 ">
                              <p className="text-[20px]">write video caption or title</p>
                              <p className="text-4xl ml-auto mr-4">⋮</p>
                            </div>
                            <div className=" w-80 h-15 flex items-center gap-2 flex-wrap">
                              <span className="text-[18px]   ml-2">@channel-name</span>
                              <span className="text-[18px]   ml-2">1m views</span>
                              <span className="text-[18px]  ml-2">10 days ago</span>
                            </div>
                          </div>
                        </div> 
                      </div>
        
                    </>
  )
}

export default video
