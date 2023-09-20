import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Image from "next/image"
import Funcionario from "@/core/Funcionario";
import { useState } from "react";
import EntradaPerfil from "@/components/EntradaPerfil";

export default function PerfilFuncionario() {
    const funcionarioTeste = new Funcionario('Abner', "111111111", "2222222", "1111-1111", "email@gmail.com", "123", "1", false)

    const [nome, setNome] = useState(funcionarioTeste.nome ?? '')
    const [celular, setCelular] = useState(funcionarioTeste.celular ?? '')
    const [cpf, setCpf] = useState(funcionarioTeste.cpf ?? '')
    const [email, setEmail] = useState(funcionarioTeste.email ?? '')
    const [editar, setEditar] = useState(true)

    function salvarFuncionario(funcionario: Funcionario){
        setEditar(!editar)
    }

    return (
        <LayoutUser usuario={'funcionario'} className="flex flex-col gap-2 text-black" divisoes>
            
            <section className="bg-white rounded-md w-auto h-1/2 m-2 mb-0">
                <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-1/2 rounded-md"></div>
                <div className="flex flex-row">
                    <figure className="-mt-20 ml-10">
                        <Image src="/images/IMG_3817.jpg" width='190' height='190' alt="imagem do curso" className="rounded-full"/>
                    </figure>
                    <h2 className="mt-10 ml-5 ">Nome Completo Exemplo</h2>
                    <Botao onCLick={() => salvarFuncionario(
                        new Funcionario(nome, cpf, funcionarioTeste.rg, celular, email, funcionarioTeste.senha, funcionarioTeste.id, false))} 
                    className="m-10 p-10 bg-blue-400">{editar == true ? 'Alterar':'Salvar'}</Botao>
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

                <figure className="bg-white rounded-md w-1/2 h-auto m-2 ml-1 mt-0 
                                flex flex-col items-center">
                    <Image src='/images/logoLOGIN.png' width='250' height='250' alt='imagemDoCurso'/>
                </figure>

            </div>
        </LayoutUser>
    )
}