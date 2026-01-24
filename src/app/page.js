import Link from "next/link";

export default function Home(){
  return(<>
    <h1>List of projects:</h1>
    <h1>Imitate UI design of youtube or balatro with Tailwind</h1>
    <h1>Set up some local storage with JSON and create a "full stack" project</h1>
    <h1>Connect to a database - SQLLite</h1>

    <div className="flex flex-col items-center">
      <Link className="bg-blue-200 w-fit p-2 m-2" href={'/ToDo'}>ToDo</Link>
      <Link className="bg-blue-200 w-fit p-2 m-2" href={'/MultiVariableForm'}>MultiVariableForm</ Link>
      <Link className="bg-blue-200 w-fit p-2 m-2" href={'/ConditionalRendering'}>ConditionalRendering</ Link>
      <Link className="bg-blue-200 w-fit p-2 m-2" href={'/BalatroUI'}>BalatroUI</Link>
    </div>
  </>)
}