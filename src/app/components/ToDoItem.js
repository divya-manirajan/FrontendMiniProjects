import { useEffect } from "react";

export default function ToDoItem(props){

  const item = props.item;
  const index = props.index;
  const toDos = props.toDos;
  const setToDos = props.setToDos;
  const editInfo = props.editInfo;
  const setEditInfo = props.setEditInfo
  // const [editInfo, setEditInfo] = useState({
  //       isEdit: false,
  //       editIndex: -1,
  //       editText: ""
  //     })

  function handleDelete(index){
    const updatedToDos = toDos.filter((_, i) => i != index)
    setToDos(updatedToDos)
    
    setEditInfo({
      isEdit: false,
      editIndex: -1,
      editText: ""
    })
  }

  function handleEdit(item, index){
    setEditInfo({
      isEdit: true,
      editIndex: index,
      editText: item
    })
  }

  function handleChange(e){
    setEditInfo(prev => ({
      ...prev,
      editText: e.target.value
    })) 
  }

  function handleSave(index){
    const updatedToDos = [...toDos]
    updatedToDos[index] = editInfo.editText
    setToDos(updatedToDos)

    setEditInfo({
      isEdit: false,
      editIndex: -1,
      editText: ""
    })
  }

    useEffect(() => {
    console.log(editInfo)
  }, [editInfo])

  return(
    <>
      {editInfo.isEdit && editInfo.editIndex == index ? (
        <div className="flex flex-row items-center">
          <input 
            className="p-2 rounded-xl bg-white" 
            onChange={handleChange}
            value={editInfo.editText}></input>
          <button className="bg-red-200 rounded-xl p-2 m-2" onClick={() => handleDelete(index)}>Delete</button>
          <button className="bg-blue-200 rounded-xl p-2 m-2" onClick={() => handleSave(index)}>Save</button>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <h1 className="mr-5 p-2">{item}</h1>
          <button className="bg-red-200 rounded-xl p-2 m-2" onClick={() => handleDelete(index)}>Delete</button>
          <button className="bg-blue-200 rounded-xl p-2 m-2" onClick={() => handleEdit(item, index)}>Edit</button>
        </div>
      )}
    </>
    
  )
}


