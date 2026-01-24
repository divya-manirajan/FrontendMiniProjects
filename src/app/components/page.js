import BalatroBanner from "./BalatroBanner";

export default function page() {
  return (
    <>
        <div id="full-screen" className="flex flex-row bg-[url(/bg-greenPokerTable.jpg)] bg-no-repeat bg-cover w-screen h-screen overflow-hidden">
            <div id="banner-component" className="bg-gray-700 ml-20 w-[270px] h-full p-1">
                <BalatroBanner />
            </div>
        </div>
    </>
  )
}
