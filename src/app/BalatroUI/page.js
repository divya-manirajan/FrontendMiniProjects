import BalatroBanner from "../components/BalatroBanner";

export default function Page(){
    return (
        <>
            <div id="full-screen" className="flex flex-row bg-[url(/bg-greenPokerTable.jpg)] bg-no-repeat bg-cover w-screen h-screen">
                <div id="banner-component" className="bg-gray-700 ml-20 w-[270px] h-full p-1">
                    <BalatroBanner />
                </div>
                <div id="card-elements" className="w-full h-full">
                    <div id="top-row" className="flex flex-row w-full h-1/3">
                        <div id="jokers" className="bg-black/20 w-2/3 m-5 rounded-xl"></div>
                        <div id="items" className="bg-black/20 w-1/3 mr-5 my-5 rounded-xl"></div>
                    </div>
                    <div id="middle-row" className="flex flex-row w-full h-1/3 rounded-xl">
                        <div id="played-cards" className="bg-black/20 w-full mx-5 rounded-xl"></div>
                    </div>
                    <div id="bottom-row" className="flex flex-row w-full h-1/3">
                        <div id="cards-in-hand" className="bg-black/20 w-3/4 m-5 rounded-xl"></div>
                        <div id="deck" className="bg-black/20 w-1/4 mr-5 my-5 rounded-xl"></div>
                    </div>
                </div>
            </div>

        </>
    )
}