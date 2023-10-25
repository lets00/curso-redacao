export default function(){
    return(
        <div className="p-2">
            <div className="flex items-center mb-2 gap-3 border-b-2 pb-2 border-pink-300">
                <p className="text-sm font-medium text-gray-500 ">30 avaliações</p>
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-pink-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="text-sm font-medium text-gray-900 ">4.95</p>
                </div>
            </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-pink-800 hover:underline">5</a>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-pink-300 rounded" style={{width: '70%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">70%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-pink-800 hover:underline">4</a>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-pink-300 rounded" style={{width: '17%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">17%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-pink-800 hover:underline">3</a>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-pink-300 rounded" style={{width: '8%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">8%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-pink-800 hover:underline">2</a>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-pink-300 rounded" style={{width: '4%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">4%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-pink-800 hover:underline">1</a>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-pink-300 rounded" style={{width: '1%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">1%</span>
                    </div>
        </div>
    )
}