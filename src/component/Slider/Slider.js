import React from 'react'
import slider from "./Slider.module.css"

function Slider() {
 let  Array=[
    "./pintress/img (1).jpg",
    "./pintress/img (2).jpg",
    "./pintress/img (3).jpg",
    "./pintress/img (4).jpg",
    "./pintress/img (5).jpg",
    "./pintress/img (6).jpg"
  ]
  return (
    <div className={slider.container} >
      <div className={slider.imgContainer}>

      {Array.map((item)=>{
        return <img src={item} className={slider.zoom} alt="sorry" />
      
      })}
      </div>
    </div>
  )
}

export default Slider
