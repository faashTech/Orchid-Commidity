import React from 'react'
import { randomID } from './Categories'


const data = [
    "Kamoa-Kakula Copper Complex",
    "Western Foreland Copper Exploration",
    "Kipushi Zinc Mine",
    "Kamao copper mine zinc",
]


function TextEvu() {
  return (
    <div className='container mx-auto p-6 md:flex  gap-3 justify-between hidden my-20 text-white py-20 '>
            {data.map(title=>{
                return <h1 key={randomID} className='font-bold cursor-pointer text-3xl hover:text-orange-400 border-r-2 border-white px-3'>{title}</h1>
            })}
    </div>
  )
}

export default TextEvu
