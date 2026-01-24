import Link from "next/link";

export default function Home(){
  return(
  <div className="h-screen w-screen bg-green-100 p-10 flex flex-col items-center">
    <div className="grid grid-cols-2 place-items-center w-120">
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/ToDo'}>ToDo</Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/MultiVariableForm'}>MultiVariableForm</ Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/ConditionalRendering'}>ConditionalRendering</ Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/BalatroUI'}>BalatroUI</Link>
    </div>

    <div className="text-center mt-10">
      <h1>List of upcoming projects:</h1>
      <h1>1. Set up some local storage with JSON and create a "full stack" project</h1>
      <h1>2. Connect to a database - SQLLite</h1>
    </div>
    
  </div>)
}