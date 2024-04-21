import { useState } from "react";

export default function Hero() {
    // let count=10;
    const [count, setCount]=useState(0)
    const onClickPlus=()=>{
    // count++;
    // console.log(count);
    setCount(count+1)
    }
    const onClickMinus=()=>{
        if (count > 0) {
            setCount(count - 1);
        }  
    }
    
    return(
        <div className='container bg-slate-500'>
            <div className="bg-yellow-50 mx-auto py-[80px] px-[90px] text-center  max-w-prose ... ">
            <h1 className="mx-auto text-center text-[44px]">Ишотчик:</h1>
                <h1 className="mx-auto text-[84px] mt-[20px]">{count}</h1>
               <div className="flex items-center justify-between gap-[54px] mt-[30px]">
                <button onClick={onClickMinus} className="rounded-[12px] bg-red-500 py-[15px] px-[57px] shadow-lg shadow-blue-500/50 shadow-winner text-[30px]"  type="button">-</button>
                <button onClick={onClickPlus} className="rounded-[12px] bg-green-600 py-[15px] px-[57px] shadow-lg shadow-red-500/50 shadow-xl text-[30px]"  type="button">+</button>
               </div> 
            </div>
        </div>
       
      
        
    )
}