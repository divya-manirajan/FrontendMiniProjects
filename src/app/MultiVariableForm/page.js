"use client"

import { useEffect, useState } from "react"


export default function page() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  })
  
  const [submission, setSubmission] = useState([])

  function handleChange(e){
    setFullName(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()

    setSubmission(prev => ([
      ...prev,
      {...fullName}
    ]))

    setFullName({
    fName: "",
    lName: ""
  })
  }


  useEffect(() => {
    console.log(fullName)
  },[fullName])

  return (<>
  <div className="bg-gradient-to-b from-sky-200 to-violet-300 h-screen w-screen pt-15">
    <h1 className="text-center text-4xl mb-5 font-sans">To-Do App</h1>
    <div className="min-h-48 w-2/3 m-auto rounded-3xl shadow-blue-400 shadow-lg bg-green-300 ">
    <form className="flex flex-col p-10 justify-center" onSubmit={handleSubmit}>
      <input 
        required
        className="m-2 p-2 rounded-xl text-3xl bg-white"
        name="fName"
        placeholder="First Name:"
        value={fullName.fName}
        type="text" 
        onChange={handleChange} 
      />
      <input 
        required
        className="m-2 p-2 rounded-xl text-3xl bg-white"
        name="lName"
        placeholder="Last Name"
        value={fullName.lName}
        type="text" 
        onChange={handleChange} 
      />
      <button className="m-2 p-2 rounded-xl text-3xl bg-blue-400">Add</button>
    </form>

    <div className="flex flex-col items-center font-sans text-xl pb-5">
      <h1 className="text-2xl">Names:</h1>   
      <ul>
        {submission.map((item, index) => {
          return(
            <li key={index}>{item.fName} {item.lName}</li>
          )
        })}
      </ul>

    </div>
      
     

    </div>
  </div>
  </>)
}