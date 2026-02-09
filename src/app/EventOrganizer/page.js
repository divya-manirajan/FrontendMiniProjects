'use client'

import { useEffect, useState } from "react"
import AddEvent from "../components/AddEvent"
import GalleryView from "../components/GalleryView"
import LogIn from "../components/LogIn"

export default function page() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [view, setView] = useState("Gallery")
    const [user, setUser] = useState("")


    if (!isLoggedIn){
        return <LogIn setIsLoggedIn={setIsLoggedIn} setView={setView} setUser={setUser}/>
    }
    if (view === "Gallery"){
        return <GalleryView setIsLoggedIn={setIsLoggedIn} setView={setView} user={user}/>
    }
    if (view === "Add"){
        return <AddEvent setIsLoggedIn={setIsLoggedIn} setView={setView}/>
    }

}

