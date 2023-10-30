import Turma from "@/core/Turma";
import Select from "../Select";
import { useEffect, useState } from "react";
import ModalTurma from "./ModalTurma";

interface ModalRootTurmaProps {
    turmas: Turma[]
    turmasSeletor: any
    turmaSelecionada?: (turma: Turma) => void
    setOpenModal?: (open: boolean) => void
    adicao?: (turma: Turma) => void
    editar?: (turma: Turma) => void
}

export default function ModalRootTurma(props: ModalRootTurmaProps){
    
    const [filtro, setFiltro] = useState('Todos(as)')
    const [selecionou, setSelecionou] = useState<Boolean>(false)
    const [turma, setTurma] = useState(Turma.vazio())

    function selecao(filtroNovo: any){
        setFiltro(filtroNovo)
        const turmaSelecionada = props.turmas.find((turma) => turma.nome === filtroNovo);

        if (turmaSelecionada) {
            setTurma(turmaSelecionada);
        } else {
            setTurma(Turma.vazio());
        }
    }

    useEffect(() => {
        setFiltro(filtro);
    }, [setFiltro, setSelecionou])

    return (
        <div className="flex text-black gap-3 -ml-3 -mt-2">
            {selecionou === false ? 
            <>
                <div>
                    <Select titulo="Turma:" seletor={props.turmasSeletor} classname="bg-pink-500 text-white" setFiltro={setFiltro}></Select>
                    <button onClick={()=>{setSelecionou(true)}} className="bg-pink-500 text-white py-2 px-4 rounded-full ml-6">Criar nova turma</button>
                </div>
                <div className="flex flex-col items-end gap-2 mt-12">
                    {filtro ===  'Todos(as)' ? null : 
                    <>
                        <button onClick={()=>{setSelecionou(true)}} className="bg-pink-500 text-white py-2 px-4 rounded-md font-bold">Deletar</button>
                        <button onClick={()=>{setSelecionou(true)}} className="bg-pink-500 text-white py-2 px-4 rounded-md font-bold">Editar</button>
                    </>}
                </div>
            </> :
            <ModalTurma setSelecionou={setSelecionou} setOpenModal={props.setOpenModal} turma={turma} adicao={props.adicao} editar={props.editar}/>
            }
        </div>
    )
}