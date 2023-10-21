import Aluno from "@/core/Aluno";
import EntradaPerfil from "../EntradaPerfil";
import { useState } from "react";
import Botao from "../Botao";
import DatePicker from "../DatePicker";

interface ModalRootALunosProps {
    aluno: Aluno
    novoAluno?: (aluno: Aluno) => void
    editar?: (aluno: Aluno) => void
    setOpenModal?: (open: boolean) => void
}

export default function ModalRootALunos(props: ModalRootALunosProps){

    const id = props.aluno?.id
    const [nome, setNome] = useState(props.aluno?.nome ?? '')
    const [data, setData] = useState(props.aluno?.data ?? '')
    const [natural, setNatural] = useState(props.aluno?.natural ?? '')
    const [endereco, setEndereco] = useState(props.aluno?.endereco ?? '')
    const [celular, setCelular] = useState(props.aluno?.celular ?? '')
    const [email, setEmail] = useState(props.aluno?.email ?? '')
    const [pai, setPai] = useState(props.aluno?.pai ?? '')
    const [mae, setMae] = useState(props.aluno?.mae ?? '')
    const [rg, setRg] = useState(props.aluno?.rg ?? '')
    const [cpf, setCpf] = useState(props.aluno?.cpf ?? '')
    const [mensalidade, setMensalidade] = useState(props.aluno?.mensalidade ?? '')
    const [turma, setTurma] = useState(props.aluno?.turma ?? '')
    const [pagamento, setPagamento] = useState(props.aluno?.pagamento ?? '')
    const [senha, setSenha] = useState(props.aluno?.senha ?? '')

    return(
        <div>
            <div className="grid grid-rows-4 grid-flow-col bg-blue-200 rounded-lg p-3 my-3">
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Nome" valor={nome} valorMudou={setNome}/>
                <DatePicker titulo="Data de Nascimento"/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Naturalidade ( Cidade/Estado )" valor={natural} valorMudou={setNatural}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Endereço ( Rua, Nº, Bairro)" valor={endereco} valorMudou={setEndereco}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Número de celular (com DDD)" valor={celular} valorMudou={setCelular}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="E-mail" valor={email} valorMudou={setEmail}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Nome do Pai" valor={pai} valorMudou={setPai}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Nome da Mãe" valor={mae} valorMudou={setMae}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="RG" valor={rg} valorMudou={setRg} />
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="CPF" valor={cpf} valorMudou={setCpf}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Mensalidade" valor={mensalidade} valorMudou={setMensalidade}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Turma" valor={turma} valorMudou={setTurma}/>
            </div>
            <div className="flex place-content-end">
            <Botao className="p-10" cor="blue"
                    onClick={() => {
                        if (id) {
                            props.editar?.(new Aluno(nome, data, natural, endereco, celular, email, pai, mae, rg, cpf, mensalidade, turma, pagamento, senha, id, false));
                            console.log("funcionou")
                            props.setOpenModal?.(false);
                          } else {
                            props.novoAluno?.(new Aluno(nome, data, natural, endereco, celular, email, pai, mae, rg, cpf, mensalidade, turma, pagamento, senha, id, false));
                            props.setOpenModal?.(false);
                          }
                    } }>
                {id ? 'Alterar':'Criar funcionário'}</Botao>
            </div>
        </div>
    )
}