'use client'
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="w-screen h-20px bg-gray-800 text-white flex flex-row items-center">
        <Link className="m-2" href={'/ToDo'}>ToDo</Link>
        <Link className="m-2" href={'/MultiVariableForm'}>MultiVariableForm</ Link>
        <Link className="m-2" href={'/ConditionalRendering'}>ConditionalRendering</ Link>
        <Link className="m-2" href={'/BalatroUI'}>BalatroUI</Link>
        <Link className="m-2" href={'/LocalStorage'}>LocalStorage</Link>
        {/* <Link href={'/EventOrganizer'}>EventOrganizer</Link> */}
        <Link className="m-2" href={'/WeatherApp'}>WeatherApp</Link>
    </div>
  )
}
