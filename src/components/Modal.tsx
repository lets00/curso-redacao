import { IconeFechar } from "./Icones"
import Titulo from "./Titulo"

interface ModalProps{
    isOpen: Boolean
    isNotOpen: any
    children?: any
    cor: String
    titulo: String
    subtitulo?: String
}

export default function (props: ModalProps) {
    if(props.isOpen == true){
        return(
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-500/50 
                            flex justify-center items-center text-black">
                <div className={`bg-${props.cor} p-4 rounded-xl w-fit h-fit`}>
                    <div className="flex flex-row justify-between">
                        <Titulo className='pr-2'>{props.titulo}</Titulo>
                        <button onClick={props.isNotOpen} className="
                        flex justify-center items-center
                        rounded-full p-1 m-1 bg-slate-300 hover:bg-white">
                            {IconeFechar}
                    </button>
                    </div>
                    <h4 className="pl-7">
                        {props.subtitulo}
                    </h4>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    } else {
        return( null )
    }
}