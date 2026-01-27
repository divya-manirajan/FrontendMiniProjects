'use client'


export default function LogIn({ setIsLoggedIn, setView }) {

    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
        setView("Gallery")
    }

  return (
    <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <form className="bg-white w-100 p-5 flex flex-col items-center" onSubmit={handleSubmit}>
            <input
                className="text-white placeholder-white text-2xl p-2 rounded-lg bg-indigo-950 w-full"
                placeholder="Email: "
                required/>
            <button
                className="bg-blue-800 rounded-md p-2 text-lg text-white w-full mt-2 hover:shadow-xl hover:cursor-pointer" 
                type="submit">Log In</button>
        </form>
    </div>
  )
}
