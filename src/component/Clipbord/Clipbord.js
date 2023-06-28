import React from 'react'
import style from "./Clipbord.module.css"
import { useState } from "react"
import { useRef } from 'react'
import { useEffect } from 'react'
import { jsPDF } from "jspdf";
function Clipbord() {
    const [Text, setText] = useState("")
    const ref=useRef();
    // const func =()=>{

    //     navigator.clipboard.readText()
    //     .then(text => {
    //         console.log('Pasted content: ', text);
    //         return text;
    //     })
    //     .catch(err => {
    //         console.error('Failed to read clipboard contents: ', err);
    //     });
    
    // }

    const AddDownload = async(ref)=>{
      const doc = new jsPDF({
          orientation: 'landscape',
          unit: 'in',
          format: [4, 2],
        });
      doc.html(ref, {
        async callback(doc) {
          await doc.save('pdf_name');
        }
      });
    }

  const Addtext =async()=>{
    navigator.clipboard.readText()
    .then(text => {
        console.log('Pasted content: ', text);
        // return text;
        // let element =document.createElement('p');
        //     element.innerHTML=text
            // console.log(element);
            // ref.current.appendChild=element;
            setText(<>{Text}<p>{text}</p></>);
            console.log(Text);
    })
    .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
  }
const Addimg =async()=>{
  navigator.clipboard.readText()
  .then(text => {
      console.log('Pasted content: ', text);
      // return text;
      setText(<><>{Text}</><img style={{width:"85vw",maxWidth:"300px"}}src={text} alt="sory" /></>)
      // var element = ref.current;
      // html2pdf(element);
  })
  .catch(err => {
      console.error('Failed to read clipboard contents: ', err);
  });
    // let text=await func();
    }
    useEffect(() => {  
    // console.log(ref);
    }, [ref])
    
  return (
    <div>
      <div className={style.container}>
        <div>
            <h1>hello how are you</h1>
            <div className={style.content}ref={ref} >
                <p>{Text}</p>
            </div>
           <button className={style.button}onClick={()=>Addtext()} >Text</button>
           <button className={style.button}onClick={()=>Addimg()} >img</button>
           <button className={style.button}onClick={()=>AddDownload()} >download</button>
        </div>
      </div>
    </div>
  )
}

export default Clipbord

