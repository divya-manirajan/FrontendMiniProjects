'use client'

import { useState } from "react"

export default function page(){
    
    const [condition, setCondition] = useState()

    return(
        <div className="h-screen w-screen flex flex-col items-center bg-violet-300">
            {condition ? (
                <div className="h-24 w-48 bg-green-900 my-20 flex justify-center items-center text-white rounded-2xl">TRUE</div>
            ) : (
                <div className="h-24 w-48 bg-red-900 my-20 flex justify-center items-center text-white rounded-2xl">FALSE</div>
            )}
           
            <div className="bg-gray-400 h-48 w-56 rounded-3xl flex justify-center items-center">
                <button 
                    onClick={() => {setCondition(!condition)}}
                    className="bg-blue-400 p-3 rounded-xl hover:shadow-xl hover:cursor-pointer">Click Me</button>
            </div>
        </div>
    )

    
}