import Turma from "@/core/Turma";
import EntradaPerfil from "../EntradaPerfil";
import { useState } from "react";
import {Botao} from "../Botao";
import { IconeVoltar } from "../Icones";

interface ModalRootTurmaProps {
    turma: Turma
    adicao?: (turma: Turma) => void
    editar?: (turma: Turma) => void
    setSelecionou: (open: Boolean) => void
}

export default function ModalRootTurma(props: ModalRootTurmaProps){
    const id = props.turma?.id
    const [nome, setNome] = useState(props.turma?.nome ?? '')
    const [disciplina, setDisciplina] = useState(props.turma?.disciplina ?? '')
    const [professor, setProfessor] = useState(props.turma?.professor ?? '')
    const [dia, setDia] = useState(props.turma?.dia ?? '')
    const [horario, setHorario] = useState(props.turma?.horario ?? '')

    return(
        <div>
            <div className="grid grid-rows-3 grid-flow-col bg-pink-300 rounded-lg p-3 pr-0 pl-5 ml-3 my-3">
                {id ? (
                    <EntradaPerfil somenteLeitura texto="Id" valor={id}/>
                ) : false}
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Nome" valor={nome} valorMudou={setNome}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="disciplina" valor={disciplina} valorMudou={setDisciplina}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="professor" valor={professor} valorMudou={setProfessor}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="dia" valor={dia} valorMudou={setDia}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="horario" valor={horario} valorMudou={setHorario}/>
            </div>
            <div className="flex place-content-between gap-2">
                <Botao className="p-10 px-3 rounded-3xl flex gap-2 items-center ml-5" onClick={() => {props.setSelecionou(false)}}> {IconeVoltar} Voltar à seleção</Botao>
                <Botao className="p-10"
                    onClick={() => {
                        if (id) {
                            props.editar?.(new Turma(nome, disciplina, professor, dia, horario, id, false));
                          } else {
                            props.adicao?.(new Turma(nome, disciplina, professor, dia, horario, '4', false));
                            //aqui coloquei um id "4" só pra poder criar um turma sem nenhum atributo vazio
                          }
                    } }>
                {id ? 'Alterar':'Criar funcionário'}</Botao>
            </div>
        </div>
    )
}