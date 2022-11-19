import React from 'react'
import style from "./Button.module.css"
import img from "./but1.jpg"
function Button() {
  return (
    <div>
      <div className={style.outbd}>
        <span className={style.inbd}>more</span><span  className={style.no}>&#9658;</span>
      </div>
      <img className={style.imgbt} src={img} alt="fhlf"></img>
    </div>
  )
}

export default Button
