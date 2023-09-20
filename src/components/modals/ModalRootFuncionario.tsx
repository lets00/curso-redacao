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
        <div className="text-black">
            {id ? (
                <EntradaPerfil somenteLeitura texto="Id" valor={id}/>
            ) : false}
            <EntradaPerfil texto="Nome" valor={nome} valorMudou={setNome}/>
            <EntradaPerfil texto="CPF" valor={cpf} valorMudou={setCpf}/>
            <EntradaPerfil texto="RG" valor={rg} valorMudou={setRg}/>
            <EntradaPerfil texto="Celular" valor={celular} valorMudou={setCelular}/>
            <EntradaPerfil texto="Email" valor={email} valorMudou={setEmail}/>
            <EntradaPerfil texto="Senha" valor={senha} valorMudou={setSenha}/>
            <Botao className="p-10"
                    onCLick={() => props.funcionarioMudou?.(new Funcionario(nome, cpf, rg, celular, email, senha, id, false))}>
                {id ? 'Alterar':'Salvar'}</Botao>
        </div>
    )
}