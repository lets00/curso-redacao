export default function Comentarios(){
    return (
        <div className="w-96 mx-3 text-black">
            <h3 className="font-bold pt-2  text-gray-600">Comentários</h3>
            <form>
                <div className="flex flex-col pr-3 overflow-y-scroll">

                    <div className="border rounded-md p-3 my-3 pb-4">
                        <div className="flex gap-3 items-center">
                            <img src="/images/IMG_3817.jpg"
                                className="object-cover w-8 h-8 rounded-full"/>
                            <h3 className="font-bold">
                                Nome do usuário
                            </h3>
                        </div>
                        <h4 className="text-gray-600 mt-2 font-semibold">
                            Comentário de exemplo
                        </h4>
                    </div>

                    <div className="border rounded-md p-3 my-3 pb-4">
                        <div className="flex gap-3 items-center">
                            <img src="/images/IMG_3817.jpg"
                                className="object-cover w-8 h-8 rounded-full"/>
                            <h3 className="font-bold">
                                Nome do usuário
                            </h3>
                        </div>
                        <h4 className="text-gray-600 mt-2 font-semibold">
                            Comentário de exemplo
                        </h4>
                    </div>

                    
                    
                </div>
                
            </form>
        </div>
    )
}