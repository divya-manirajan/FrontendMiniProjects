import Link from "next/link";
import NavBar from "./components/NavBar";

export default function page(){
  return(
  <div className="h-screen w-screen bg-green-100 p-10 flex flex-col items-center">
    <NavBar />
    <div className="grid grid-cols-2 place-items-center w-120">
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/ToDo'}>ToDo</Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/MultiVariableForm'}>MultiVariableForm</ Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/ConditionalRendering'}>ConditionalRendering</ Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/BalatroUI'}>BalatroUI</Link>
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/LocalStorage'}>LocalStorage</Link>
      {/* <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/EventOrganizer'}>EventOrganizer</Link> */}
      <Link className="bg-blue-200 w-48 h-14 p-2 m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl" href={'/WeatherApp'}>WeatherApp</Link>
    </div>

    <div className="text-center mt-10">
      <h1>List of upcoming projects:</h1>
      <h1>1. Create a "full stack" project with local storage and components</h1>
      <li>local storage keeps track of login email</li>
      <li>Gallery only displays events created by user</li>
      <h1>2. Connect to a database - SQLLite</h1>
    </div>
    
  </div>)
}