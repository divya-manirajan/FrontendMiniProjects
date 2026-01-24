export default function BalatroBanner(){
    return(
        <>
        
                <div className="bg-yellow-400/70 rounded-xl mt-10 h-12 mb-1 shadow-black shadow-sm"></div>
                <div className="h-36 bg-yellow-200/80 rounded-xl flex flex-row items-center justify-center p-4 shadow-black shadow-sm">
                    <div className="bg-black/20 w-1/3 rounded-full aspect-square mr-2 shadow-black shadow-sm"></div>
                    <div className="bg-black/20 w-2/3 h-18 shadow-black shadow-sm"></div>
                </div>
                <div className="bg-gray-900 rounded-xl mt-1 h-14 mb-1 shadow-black shadow-sm flex flex-row items-center p-2">
                    <div className="text-white text-center w-24 "><p>Round Score</p></div>
                    <div className="bg-gray-800/80 h-full w-full rounded-xl"></div>
                </div>
                <div className="h-30 w-full bg-gray-900 rounded-xl shadow-black shadow-sm flex flex-col items-center p-2">
                    <div className="text-white mt-2 flex flex-row">
                        <p className="text-2xl m-1">Type</p>
                        <p className="text-sm">Level</p> 
                    </div>
                    <div className="text-white flex flex-row items-center">
                        <div className="h-10 w-20 bg-blue-400 rounded-2xl"></div>
                        <div className="mx-2 text-3xl">X</div>
                        <div className="h-10 w-20 bg-red-400 rounded-2xl"></div>
                    </div>
                </div>
                <div className="flex flex-row mt-2 h-50">
                    <div className="flex flex-col w-28 mr-2 justify-between">
                        <div className="bg-red-500 h-22 w-full rounded-xl flex items-center justify-center">Run Info</div>
                        <div className="bg-amber-500 h-22 w-full rounded-xl flex items-center justify-center">Options</div>
                    </div>
                    <div className="flex flex-col w-full justify-between">
                        <div className="flex flex-row justify-between h-16">
                            <div className="bg-gray-900 w-21.5 rounded-md text-white text-sm flex items-center flex-col">
                                <p>Hands</p>
                                <div className="bg-gray-800/80 h-10 w-15 rounded-xl"></div>
                            </div>
                            <div className="bg-gray-900 w-21.5 rounded-md text-white text-sm flex items-center flex-col">
                                <p>Discards</p>
                                <div className="bg-gray-800/80 h-10 w-15 rounded-xl"></div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full h-16">
                            <div className="bg-gray-900 w-full rounded-md text-white text-sm flex items-center flex-col px-2 py-1">
                                <div className="bg-gray-800/80 h-full w-full rounded-xl"></div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-between h-16">
                            <div className="bg-gray-900 w-21.5 rounded-md text-white text-sm flex items-center flex-col">
                                <p>Ante</p>
                                <div className="bg-gray-800/80 h-10 w-15 rounded-xl"></div>
                            </div>
                            <div className="bg-gray-900 w-21.5 rounded-md text-white text-sm flex items-center flex-col">
                                <p>Round</p>
                                <div className="bg-gray-800/80 h-10 w-15 rounded-xl"></div>
                            </div>
                        </div>

                        
                    </div>
                </div>

            
            
        </>
    )
}