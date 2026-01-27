'use client'

export default function GalleryView({ setIsLoggedIn, setView }) {
  return (
    <div>
      GalleryView
      <button className="bg-blue-200 p-2 " onClick={() => {setIsLoggedIn(false)}}>Log Out</button>
      <button className="bg-green-200 p-2" onClick={() => {setView("Add")}}>Add Event</button>
    </div>
  )
}
