import Funcionario from "@/core/Funcionario";
import Entrada from "../Entrada";
import { useState } from "react";
import Botao from "../Botao";

interface ModalFuncionarioProps {
    funcionario: Funcionario
    funcionarioMudou?: (funcionario: Funcionario) => void
}

export default function ModalFuncionario(props: ModalFuncionarioProps){
    const id = props.funcionario?.id
    const [nome, setNome] = useState(props.funcionario?.nome ?? '')
    const [cpf, setCpf] = useState(props.funcionario?.cpf ?? '')
    const [rg, setRg] = useState(props.funcionario?.rg ?? '')
    const [celular, setCelular] = useState(props.funcionario?.celular ?? '')
    const [email, setEmail] = useState(props.funcionario?.email ?? '')
    const [senha, setSenha] = useState(props.funcionario?.senha ?? '')

    return(
        <div>
            <h1>TesteModalFuncionario</h1>
            {id ? (
                <Entrada somenteLeitura texto="Id" valor={id}/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>
            <Entrada texto="CPF" valor={cpf} valorMudou={setCpf}/>
            <Entrada texto="RG" valor={rg} valorMudou={setRg}/>
            <Entrada texto="Celular" valor={celular} valorMudou={setCelular}/>
            <Entrada texto="Email" valor={email} valorMudou={setEmail}/>
            <Entrada texto="Senha" valor={senha} valorMudou={setSenha}/>
            <Botao className="p-10"
                    onCLick={() => props.funcionarioMudou?.(new Funcionario(nome, cpf, rg, celular, email, senha, id))}>
                {id ? 'Alterar':'Salvar'}</Botao>
        </div>
    )
}