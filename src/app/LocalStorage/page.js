'use client'
import { useEffect, useState } from "react"

export default function page(){

    const [formData, setFormData] = useState({
        FName: "",
        LName: "",
        Email: ""
    })

    const [users, setUsers] = useState(() => {
        try{
            const savedUsers = localStorage.getItem("users")
            return savedUsers ? JSON.parse(savedUsers) : ""
        } catch (error){
            console.log("Error: ", error)
        }    
    })

    function handleChange(e){
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        setUsers(prev => ([
            ...prev,
            {...formData}
        ]))

        setFormData({
            FName: "",
            LName: "",
            Email: ""
        })
    }

    function handleClear(){
        localStorage.clear()
        setUsers([])
    }

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
        console.log("Local Storage: ", localStorage.getItem("users"))
    }, [users])

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <form className="h-fit w-80 bg-white flex flex-col items-center p-10" onSubmit={handleSubmit}>
                {/* FName, LName, Email, Phone, Message */}
                <input 
                    className="placeholder-white bg-gray-700 h-fit text-2xl text-white p-2 rounded-xl" 
                    placeholder="First Name: "
                    name="FName"
                    value={formData.FName}
                    required
                    onChange={handleChange}/>
                <input 
                    className="placeholder-white bg-gray-700 h-fit text-2xl text-white p-2 mt-2 rounded-xl" 
                    placeholder="Last Name: "
                    name="LName"
                    value={formData.LName}
                    required
                    onChange={handleChange}/>
                <input 
                    className="placeholder-white bg-gray-700 h-fit text-2xl text-white p-2 mt-2 rounded-xl" 
                    placeholder="Email: "
                    name="Email"
                    value={formData.Email}
                    required
                    onChange={handleChange}/>
                <div className="flex flex-row justify-between w-full pt-2">
                    <button className="bg-blue-300 p-1 rounded-xl hover:cursor-pointer hover:shadow-xl text-white" type="submit">Submit</button>
                    <button className="bg-gray-600 p-1 rounded-xl hover:cursor-pointer hover:shadow-xl text-white" formNoValidate type="button" onClick={handleClear}>Clear Storage</button>
                </div>
            </form>
        </div>
    )
}