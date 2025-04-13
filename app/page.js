'use client'

import React,{useState} from "react"

export default function Home(){

  const [display, setDisplay] = useState('')

  const handleButtonCLick = (value)=>{

    if(value === 'AC'){
      setDisplay('')
    }else if(value === '='){
      try{
        setDisplay(String(eval(display)))
      }catch(err){
        alert('Enter a valid number')
      }
    }else if(value === 'C'){
      const newArray = display.substring(0, display.length-1)
      setDisplay(newArray)
    }
    else{
      setDisplay(display + value)
    }
  }


  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '/',
    'AC', '0', '*', '=','C'
  ]

  return(
    <div className="flex flex-col p-5 w-1/3 bg-gray-600 rounded-2xl">
      <h1 className="font-semibold text-2xl text-center">Calculator</h1>

      <div>
        <div className="bg-gray-500 rounded text-right px-3 py-2 h-16 items-center content-center justify-center">{display}</div>

        <div className="grid grid-cols-4 mt-3 gap-3">
          {buttons.map((btn,inx)=>(
            <button className="bg-gray-500 rounded py-4 active:bg-gray-400 transition duration-150"    
            key={inx}
            onClick={()=> handleButtonCLick(btn)}>
              {btn}
              </button>
          ))}
        </div>
      </div>

    </div>
  )
}