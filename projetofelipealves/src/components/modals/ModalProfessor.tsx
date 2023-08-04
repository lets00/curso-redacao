import Professor from "@/core/Professor";
import Entrada from "../Entrada";
import { useState } from "react";
import Botao from "../Botao";

interface ModalProfessorProps {
    professor: Professor
    professorMudou?: (professor: Professor) => void
}

export default function ModalProfessor(props: ModalProfessorProps){
    const id = props.professor?.id
    const [nome, setNome] = useState(props.professor?.nome ?? '')
    const [cpf, setCpf] = useState(props.professor?.cpf ?? '')
    const [rg, setRg] = useState(props.professor?.rg ?? '')

    return(
        <div>
            <h1>TesteModalProfessor</h1>
            {id ? (
                <Entrada somenteLeitura texto="Id" valor={id}/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>
            <Entrada texto="CPF" valor={cpf} valorMudou={setCpf}/>
            <Entrada texto="RG" valor={rg} valorMudou={setRg}/>
            <Botao className="p-10"
                    onCLick={() => props.professorMudou?.(new Professor(nome, cpf, rg, id))}>
                {id ? 'Alterar':'Salvar'}</Botao>
        </div>
    )
}