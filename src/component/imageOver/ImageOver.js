import React from 'react'
import style from "./imageOver.module.css"
function ImageOver() {
  return (
    <div className={style.container}>
    <div className={style.forground}>
      <div className={style.items}>
        <div className={style.heder}></div>
        <div className={style.content}>
          <div className={style.content1}><h1 className={style.h1}>Sprinited Away</h1></div>
          <img className={style.img} src="anime.png" alt="nothing" />
          <div className={style.content2}>
            <p className={style.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              eum voluptatem soluta temporibus nesciunt nemo, harum eos,
              ducimus eligendi quo facilis quae optio vero earum laudantium
              quos tempore unde impedit?
            </p>
            <p className={style.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              eum voluptatem soluta temporibus nesciunt nemo, harum eos,
              ducimus eligendi quo facilis quae optio vero earum laudantium
              quos tempore unde impedit?
            </p>
            <p className={style.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              eum voluptatem soluta temporibus nesciunt nemo, harum eos,
              ducimus eligendi quo facilis quae optio vero earum laudantium
              quos tempore unde impedit?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ImageOver
