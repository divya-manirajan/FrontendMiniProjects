'use client'
import { useState } from "react"
export default function Test(){

    const [editInfo, setEditInfo] = useState({
        isEdit: false,
        editIndex: -1
    })

    if (editInfo.isEdit == true){
        return <p>TRUE</p>
    }
    if (editInfo.isEdit == false){
        return <p>FALSE</p>
    }
}