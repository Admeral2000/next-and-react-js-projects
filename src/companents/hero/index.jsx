import { useState } from "react";
import cls from "@/companents/hero/hero.module.css";

// JSX elemnt qilib yaratildi
// const Modal=({open, setOpen})=>(
//   <div className={`${cls.overlay} ${cls.animated} ${open?`${cls.show}`:``}`}>
//         <div className={cls.modal}>
//           <svg onClick={()=>setOpen(false)} height={200} width={200} viewBox="0 0 200 200" >
//             <title />
//             <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//           </svg>
//         <picture> <img width={400} src="https://picsum.photos/200/120"  /></picture> 
//         </div>
//       </div>
// )

// Bunda Jsx elemtida rasmni dinamik chaqirildi
const Modal=({open, setOpen, children})=>(
  <div className={`${cls.overlay} ${cls.animated} ${open?`${cls.show}`:``}`}>
        <div className={cls.modal}>
          <svg onClick={()=>setOpen(false)} height={200} width={200} viewBox="0 0 200 200" >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
       {children} 
        </div>
      </div>
)

export default function Hero() {
    let [open,setOpen]=useState(false)
    
    return(
        <div className={cls.App}>
        <button onClick={()=>setOpen(true)} className={cls.openModalBtn}  type="button">✨ открытки окно</button>
        {/* Yangidan reneder qiladi, agar Modal JSX elementi orqali yaratilsa */}
        {/* {open && <Modal open={open} setOpen={setOpen} />} */}
        
        {/* Agar open && JSX elementi oldidan yozilsa animatsiya ishlamaydi, amal juda tez bajariladi */}
        {/* {open &&( <div className={cls.overlay}>
        <div className={cls.modal}>
          <svg onClick={()=>setOpen(false)} height={200} width={200} viewBox="0 0 200 200" >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        <picture> <img width={400} src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"  /></picture> 
        </div>
      </div>
      )} */}

      {/* Bu yerda open && olib tashlanagn,  va show className={show} qo'shildi, shuning uchun u render bo'lmaydi va animatsiya ishlaydi */}
     {/* <div className={`${cls.overlay} ${cls.animated} ${open?`${cls.show}`:``}`}>
        <div className={cls.modal}>
          <svg onClick={()=>setOpen(false)} height={200} width={200} viewBox="0 0 200 200" >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        <picture> <img width={400} src="https://picsum.photos/200/120"  /></picture> 
        </div>
      </div> */}
     

     {/* Jsx elementida element dinamik qilindi, children o'rniga element qo'ydik */}
     <Modal open={open} setOpen={setOpen}> 
     <picture> <img width={400} src="https://picsum.photos/200/120"  /></picture>
     <h3>This picture</h3> 
     </Modal>
     
      </div>
    
);
}