import Turma from "@/core/Turma";
import Select from "../Select";
import { useEffect, useState } from "react";
import ModalTurma from "./ModalTurma";

interface ModalRootTurmaProps {
    turmas: Turma[]
    turmasSeletor: any
    turmaSelecionada?: (turma: Turma) => void
    setSelect?:(select: string[]) => void
}

export default function ModalRootTurma(props: ModalRootTurmaProps){
    
    const [filtro, setFiltro] = useState('Todos(as)')
    const [selecionou, setSelecionou] = useState<Boolean>(false)
    const [excluir, setExcluir] = useState<Boolean>(false)
    const [turma, setTurma] = useState<Turma>(Turma.vazio())
    const [seletor, setSeletor] = useState(props.turmasSeletor)
    const [turmas, setTurmas] = useState(props.turmas)

    function selecionarTurma(){
        const turmaSelecionada = turmas.find((turma) => turma.nome === filtro);

        if (turmaSelecionada) {
            setTurma(turmaSelecionada);
        } else {
            setTurma(Turma.vazio());
        }
        setSelecionou(true)
    }
    function excluirTurma(){
        const turmaSelecionada = turmas.find((turma) => turma.nome === filtro);

        if (turmaSelecionada) {
            setTurma(turmaSelecionada);
        } else {
            setTurma(Turma.vazio());
        }
        setExcluir(true)
    }

    function exclusao() {
        const turmaFiltrada = turmas.filter((turma) => turma.nome !== filtro);
        if (turmaFiltrada.length > 0) {
          setTurmas(turmaFiltrada);
        } else {
          alert("Turma não encontrada");
        }

        const turmaSeletorAtualizado = seletor.filter((nome: any) => nome !== filtro);
        setSeletor(turmaSeletorAtualizado);
        props.setSelect?.(turmaSeletorAtualizado);
        setExcluir(false);
        setSelecionou(false);
      }
    function edicao(turmaEditada: Turma) {
        const indexToEdit = turmas.findIndex((turma) => turma.nome === filtro);
      
        if (indexToEdit !== -1) {
          const listaAtualizada = [...turmas];
          listaAtualizada[indexToEdit] = turmaEditada;
          setTurmas(listaAtualizada);
      
          const seletorAtualizado = ['Todos(as)', ...listaAtualizada.map((turma) => turma.nome)];
          setSeletor(seletorAtualizado);
          props.setSelect?.(seletorAtualizado);
        } else {
          alert("Turma não encontrada");
        }
        setSelecionou(false);
      }

    return (
        <div className="flex text-black gap-3 -ml-3 -mt-2">
            {selecionou === true ? 
                <ModalTurma setSelecionou={setSelecionou} turma={turma} editar={edicao}/>
            :
            excluir === false?
            <>
                <div>
                    <Select titulo="Turma:" seletor={seletor} classname="bg-pink-500 text-white" setFiltro={setFiltro}></Select>
                    <button onClick={()=>{setTurma(Turma.vazio()); setSelecionou(true)}} className="bg-pink-500 text-white py-2 px-4 rounded-full ml-6">Criar nova turma</button>
                </div>
                <div className="flex flex-col items-end gap-2 mt-12">
                    {filtro !== 'Todos(as)' ? (
                    <>
                        <button onClick={excluirTurma} className="bg-pink-500 text-white py-2 px-4 rounded-md font-bold">Deletar</button>
                        <button onClick={selecionarTurma} className="bg-pink-500 text-white py-2 px-4 rounded-md font-bold">Editar</button>
                    </>
                    ) : null}
                </div>
            </>
            :
            <div className="flex flex-col items-center content-center p-4 px-5 gap-3">
                <h3>Deseja excluir a turma {filtro}?</h3>
                <button onClick={exclusao} className="p-3 bg-red-600 text-white font-bold rounded-lg">Sim, Excluir</button>
            </div>
            }
        </div>
    )
}