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
                <div className="flex flex-row mt-1 rounded-xl h-48">
                    <div className="flex flex-col h-full w-24 p-2">
                        <div className="bg-red-500 w-20 h-22 mb-2 rounded-xl flex items-center justify-center shadow-black shadow-sm">Run Info</div>
                        <div className="bg-amber-600 w-20 h-22 text-center rounded-xl flex items-center justify-center shadow-black shadow-sm">Options</div>
                    </div>
                    
                </div>

            
            
        </>
    )
}