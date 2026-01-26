'use client'

import { useEffect, useState } from "react"

export default function page() {

    const [test, setTest] = useState(null)

    useEffect(() => {
        try{
            localStorage.setItem("test", "Test Local Storage")
            setTest(localStorage.getItem("test"))
        } catch (e){
            console.log(e)
        }
    }, [])



  return (
    <div>

        <button>click me</button>

        {test}

      
    </div>
  )
}
