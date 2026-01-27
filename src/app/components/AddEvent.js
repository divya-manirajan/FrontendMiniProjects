'use client'

import { useEffect, useState } from "react"

export default function AddEvent() {

    const [formData, setFormData] = useState({
        eventName: "",
        location: ""
    })
    const [events, setEvents] = useState([])

    //Set events with local Storage
    useEffect(() => {
        const savedEvents = localStorage.getItem("events")
        if (savedEvents){
            setEvents(JSON.parse(savedEvents))
        }
    }, [])

    function handleChange(e){
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        setEvents(prev => ([
            ...prev,
            {...formData}
        ]))
        setFormData({
                eventName: "",
                location: ""
            })
    }

    function handleClear(){
        localStorage.clear()
        setEvents([])
        setFormData({
                eventName: "",
                location: ""
            })
    }

    //Set and log saved Events
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events))
        console.log("Saved Events", localStorage.getItem("events"))
    }, [events])

  

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center flex flex-col">
        <form className="h-fit w-160 bg-white flex flex-col items-center p-10" onSubmit={handleSubmit}>
            <input 
                className="placeholder-white bg-gray-700 h-fit w-full text-2xl text-white p-2 mt-2 rounded-xl" 
                placeholder="Event Name: "
                name="eventName"
                required
                onChange={handleChange}
                value={formData.eventName}
            />
            <input 
                className="placeholder-white bg-gray-700 h-fit w-full text-2xl text-white p-2 mt-2 rounded-xl" 
                placeholder="Location: "
                name="location"
                required
                onChange={handleChange}
                value={formData.location}
            />
            <button className="bg-blue-300 p-1 mt-3 rounded-xl hover:cursor-pointer hover:shadow-xl text-white" type="submit">Add</button>
            <button className="bg-gray-600 p-1 rounded-xl hover:cursor-pointer hover:shadow-xl text-white" formNoValidate type="button" onClick={handleClear}>Clear Storage</button>
        </form>

        <div className="flex flex-col">
            <h1>LIST:</h1>
            <ul>
                {events.map((item, index) => (
                    <li key={index}>{item.eventName} at {item.location}</li>
                ))}
            </ul>
    
        </div>
    </div>
  )
}
