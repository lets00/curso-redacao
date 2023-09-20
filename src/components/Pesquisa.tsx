export default function Pesquisa(){
    return(
        <form className="flex items-center gap-4">   
            <button type="submit" className="p-2 ml-2 text-white bg-blue-400 rounded-full border hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
            <label htmlFor="pesquisa" className="sr-only"></label>
            <div className="relative w-full">
                <input type="text" id="pesquisa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                outline-none block w-full pl-7 py-2 pr-40" placeholder="Pesquise o aluno" required/>
            </div>
        </form>
    )
}