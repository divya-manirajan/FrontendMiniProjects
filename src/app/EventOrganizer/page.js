'use client'

import { useState } from "react"
import AddEvent from "../components/AddEvent"
import GalleryView from "../components/GalleryView"
import LogIn from "../components/LogIn"

export default function page() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [view, setView] = useState("Gallery")

    if (!isLoggedIn){
        return <LogIn setIsLoggedIn={setIsLoggedIn} setView={setView}/>
    }
    if (view === "Gallery"){
        return <GalleryView setIsLoggedIn={setIsLoggedIn} setView={setView}/>
    }
    if (view === "Add"){
        return <AddEvent setIsLoggedIn={setIsLoggedIn} setView={setView}/>
    }

}

