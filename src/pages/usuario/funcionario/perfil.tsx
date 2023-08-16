import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Image from "next/image"
import Aluno from "@/core/Aluno";
import { useState } from "react";
import EntradaPerfil from "@/components/EntradaPerfil";

export default function PerfilFuncionario() {
    const alunoTeste = new Aluno('joao', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'joao@gmail',
    'jose', 'maria', 'rgrgrg', 'cpfcpf', 'dia 15', "idTeste")

    const [nome, setNome] = useState(alunoTeste.nome ?? '')
    const [celular, setCelular] = useState(alunoTeste.celular ?? '')
    const [cpf, setCpf] = useState(alunoTeste.cpf ?? '')
    const [email, setEmail] = useState(alunoTeste.email ?? '')
    const [editar, setEditar] = useState(true)

    function salvarAluno(aluno: Aluno){
        setEditar(!editar)
    }

    return (
        <LayoutUser usuario={'funcionario'} className="flex flex-col gap-2" divisoes>
            
            <section className="bg-white rounded-md w-auto h-1/2 m-2 mb-0">
                <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-1/2 rounded-md"></div>
                <div className="flex flex-row">
                    <div className="-mt-20 ml-10">
                        <Image src="/images/IMG_3817.jpg" width='190' height='190' alt="imagem do curso" className="rounded-full"/>
                    </div>
                    <h2 className="mt-10 ml-5 ">Nome Completo Exemplo</h2>
                    <Botao onCLick={() => salvarAluno(
                        new Aluno(nome, alunoTeste.data, alunoTeste.natural, alunoTeste.endereco, celular, alunoTeste.email, alunoTeste.pai, alunoTeste.mae, alunoTeste.rg,cpf, alunoTeste.pagamento, alunoTeste.id))} 
                    className="m-10 p-10 bg-blue-400" cor="blue">{editar == true ? 'Alterar':'Salvar'}</Botao>
                </div>
            </section>

            <div className="h-1/2 flex flex-row">

                <section className="bg-white rounded-md w-1/2 h-auto m-2 mr-1 mt-0 p-6
                                grid grid-cols-2">
                    <EntradaPerfil texto="Nome" valor={nome} valorMudou={setNome} somenteLeitura={editar} />
                    <EntradaPerfil texto="Número" valor={celular} valorMudou={setCelular} somenteLeitura={editar} />
                    <EntradaPerfil texto="Email" valor={email} valorMudou={setEmail} somenteLeitura={editar} />
                    <EntradaPerfil texto="CPF" valor={cpf} valorMudou={setCpf} somenteLeitura={editar} />
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