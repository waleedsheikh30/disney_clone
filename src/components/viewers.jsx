import React from 'react'
import { BrandAPI } from './localAPI'


function Viewers() {
  return (
    <div className='view-container'>

      {
         BrandAPI && BrandAPI.map((value,index) => (
            <div key={index}>
               <img src={value.imgSrc} alt="" />
               <video src={value.videoSrc} type='video/mp4' autoPlay={true} loop={true} playsInline={true} muted={true} >

               </video>
            </div>   
         ))
      }

         
    </div>
  )
}

export default Viewers