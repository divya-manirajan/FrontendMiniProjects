"use client"
import { useState } from "react";
import ToDoItem from "../components/ToDoItem";

export default function page() {

  const [task, setTask] = useState("")
  const [toDos, setToDos] = useState([])
  const [editInfo, setEditInfo] = useState({
      isEdit: false,
      editIndex: -1,
      editText: ""
    })

  function handleChange(e){
    if (editInfo.isEdit) return 

    setTask(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setToDos([task, ...toDos])

    setTask("")
  }

  return (<>
    <div className="bg-gradient-to-b from-sky-200 to-violet-300 h-screen w-screen pt-15">
    <h1 className="text-center text-4xl mb-5 font-sans">To-Do App</h1>
    <div className="min-h-48 w-2/3 m-auto rounded-3xl shadow-blue-400 shadow-lg bg-green-300 ">
    <form className="flex pt-15 justify-center" onSubmit={handleSubmit}>
      <input 
        required
        className="p-2 mr-2 rounded-xl text-3xl bg-white"
        name="toDoText"
        type="text"  
        value={task}
        onChange={handleChange}
      />
      <button className="p-2 rounded-xl text-3xl bg-blue-400">Add</button>
    </form>

    <div className="flex flex-col items-center font-sans text-xl p-5">
      <h1 className="text-2xl">To-Do Items:</h1>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            <ToDoItem item={item} index={index} toDos={toDos} setToDos={setToDos} editInfo={editInfo} setEditInfo={setEditInfo}/>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
  </>)
}