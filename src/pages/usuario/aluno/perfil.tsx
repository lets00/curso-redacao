import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Image from "next/image"
import Aluno from "@/core/Aluno";
import { useState } from "react";
import EntradaPerfil from "@/components/EntradaPerfil";

export default function PerfilAluno() {
    const alunoTeste = new Aluno('joao', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'maria', 'rgrgrg', 'cpfcpf', 15, 'presencial - terça/tarde', true, '123', "idTeste", false)

    const [modalidade, setModalidade] = useState(alunoTeste.turma ?? '')
    const [nome, setNome] = useState(alunoTeste.nome ?? '')
    const [celular, setCelular] = useState(alunoTeste.celular ?? '')
    const [rg, setRg] = useState(alunoTeste.rg ?? '')
    const [cpf, setCpf] = useState(alunoTeste.cpf ?? '')
    const [endereco, setEndereco] = useState(alunoTeste.endereco ?? '')
    const [editar, setEditar] = useState(true)

    function salvarAluno(aluno: Aluno){
        setEditar(!editar)
    }

    return (
        <LayoutUser usuario={'aluno'} className="flex flex-col gap-2 text-black" divisoes>
            
            <section className="bg-white rounded-md w-auto h-1/2 m-2 mb-0">
                <div className="bg-gradient-to-r from-blue-400 to-pink-600 h-1/2 rounded-md"></div>
                <div className="flex flex-row">
                    <div className="-mt-20 ml-10">
                        <Image src="/images/IMG_3817.jpg" width='190' height='190' alt="imagem do curso" className="rounded-full"/>
                    </div>
                    <h2 className="mt-10 ml-5 ">Nome Completo Exemplo</h2>
                    <Botao onCLick={() => salvarAluno(
                        new Aluno(nome, alunoTeste.data, alunoTeste.natural, endereco, celular, alunoTeste.email, alunoTeste.pai,
                                 alunoTeste.mae, rg,cpf, alunoTeste.mensalidade, alunoTeste.turma, alunoTeste.pagamento, alunoTeste.senha, alunoTeste.id, alunoTeste.excluido))} 
                    className="m-10 p-10 bg-blue-400" cor="blue">{editar == true ? 'Alterar':'Salvar'}</Botao>
                </div>
            </section>

            <div className="h-1/2 flex flex-row">

                <section className="bg-white rounded-md w-1/2 h-auto m-2 mr-1 mt-0 p-6
                                grid grid-cols-2">
                    <EntradaPerfil texto="Modalidade" valor={modalidade} somenteLeitura={true} />
                    <EntradaPerfil texto="Nome" valor={nome} valorMudou={setNome} somenteLeitura={editar} />
                    <EntradaPerfil texto="Número" valor={celular} valorMudou={setCelular} somenteLeitura={editar} />
                    <EntradaPerfil texto="RG" valor={rg} valorMudou={setRg} somenteLeitura={editar} />
                    <EntradaPerfil texto="CPF" valor={cpf} valorMudou={setCpf} somenteLeitura={editar} />
                    <EntradaPerfil texto="Endereço" valor={endereco} valorMudou={setEndereco} somenteLeitura={editar} />
                </section>

                <section className="bg-white rounded-md w-1/2 h-auto m-2 ml-1 mt-0 p-6
                                flex flex-col items-center">
                    <h1 className="pt-5">21 Dias</h1>
                    <h4>Para o próximo pagamento</h4>
                    <div className="w-80 h-6 mt-8 bg-gray-200 rounded-xl dark:bg-gray-700">
                        <div className="h-6 bg-gradient-to-r from-blue-400 to-pink-600 rounded-xl dark:bg-blue-500" style={{width: '45%'}}></div>
                    </div>
                </section>

            </div>
        </LayoutUser>
    )
}