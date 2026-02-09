'use client'
import { useState } from "react"

export default function LogIn({ setIsLoggedIn, setView, setUser }) {

    const [email, setEmail] = useState("")

    function handleChange(e){
        setEmail(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
        setUser(email)
        setView("Gallery")
    }

  return (
    <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <form className="bg-white w-100 p-5 flex flex-col items-center" onSubmit={handleSubmit}>
            <input
                className="text-white placeholder-white text-2xl p-2 rounded-lg bg-indigo-950 w-full"
                placeholder="Email: "
                onChange={handleChange}
                required/>
            <button
                className="bg-blue-800 rounded-md p-2 text-lg text-white w-full mt-2 hover:shadow-xl hover:cursor-pointer" 
                type="submit">Log In</button>
        </form>
    </div>
  )
}
