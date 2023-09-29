import Funcionario from "@/core/Funcionario";
import EntradaPerfil from "../EntradaPerfil";
import { useState } from "react";
import Botao from "../Botao";

interface ModalRootFuncionarioProps {
    funcionario: Funcionario
    funcionarioMudou?: (funcionario: Funcionario) => void
}

export default function ModalRootFuncionario(props: ModalRootFuncionarioProps){
    const id = props.funcionario?.id
    const [nome, setNome] = useState(props.funcionario?.nome ?? '')
    const [cpf, setCpf] = useState(props.funcionario?.cpf ?? '')
    const [rg, setRg] = useState(props.funcionario?.rg ?? '')
    const [celular, setCelular] = useState(props.funcionario?.celular ?? '')
    const [email, setEmail] = useState(props.funcionario?.email ?? '')
    const [senha, setSenha] = useState(props.funcionario?.senha ?? '')

    return(
        <div>
            <div className="grid grid-rows-2 grid-flow-col bg-blue-200 rounded-lg p-3 my-3">
                {id ? (
                    <EntradaPerfil somenteLeitura texto="Id" valor={id}/>
                ) : false}
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Nome" valor={nome} valorMudou={setNome}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="CPF" valor={cpf} valorMudou={setCpf}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="RG" valor={rg} valorMudou={setRg}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Celular" valor={celular} valorMudou={setCelular}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Email" valor={email} valorMudou={setEmail}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Senha" valor={senha} valorMudou={setSenha}/>
            </div>
            <div className="flex place-content-end">
                <Botao className="p-10" cor="blue"
                    onCLick={() => props.funcionarioMudou?.(new Funcionario(nome, cpf, rg, celular, email, senha, id, false))}>
                {id ? 'Alterar':'Criar funcionário'}</Botao>
            </div>
        </div>
    )
}