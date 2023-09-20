import Turma from "@/core/Turma";
import Select from "../Select";

interface ModalRootTurmaProps {
    turmas: any
    turmaSelecionada?: (turma: Turma) => void
}

export default function ModalRootTurma(props: ModalRootTurmaProps){
 

    return(
        <div className="flex text-black gap-3">
            <div>
                <Select titulo="Turma:" seletor={props.turmas} classname="bg-pink-500 text-white"></Select>
                <button className="bg-pink-500 text-white py-2 px-4 rounded-full ml-6">Criar nova turma</button>
            </div>
            <div className="flex flex-col items-end gap-2 mt-12">
                <button className="bg-pink-500 text-white py-2 px-4 rounded-md">Deletar</button>
                <button className="bg-pink-500 text-white py-2 px-4 rounded-md">Editar</button>
            </div>
        </div>
    )
}