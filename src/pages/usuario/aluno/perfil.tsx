import { Botao } from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import Image from "next/image"
import ModalFuncionario from "@/components/modals/ModalProfessor";
import Professor from "@/core/Professor";
import { useEffect, useState } from "react";
import PerfilDados from "@/components/PerfilDados";
import Aluno from "@/core/Aluno";

export default function AlunoPage() {

    const [editar, setEditar] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    const professores = [
        new Professor('Abner', "111111111", "2222222"),
        new Professor('Junio', "333333333", "4444444"),
        new Professor('Valdir', "555555555", "6666666")
    ]
    function professorSelecionado(professor: Professor){
    }
    function professorExcluido(professor: Professor){
    }

    return (
        <LayoutUser usuario={'aluno'} className="flex flex-col gap-2" divisoes>
            <div className="bg-white rounded-md w-auto h-1/2 m-2 mb-0">
                <div className="bg-gradient-to-r from-blue-400 to-pink-600 h-1/2 rounded-md"></div>
                <div className="flex flex-row">
                    <div className="-mt-20 ml-10">
                    <Image src="/images/IMG_3817.jpg" width={190} height={190} alt="imagem do curso" className="rounded-full"/>
                    </div>
                    <h2 className="mt-10 ml-5 ">Nome Completo Exemplo</h2>
                    <Botao onClick={() => setEditar(!editar)} className="m-10 p-10 bg-blue-400" cor="blue">{editar == true ? 'Alterar':'Salvar'}</Botao>
                </div>
            </div>
            <div className="h-1/2 flex flex-row">
                <div className="bg-white rounded-md w-1/2 h-auto m-2 mr-1 mt-0 p-6
                                grid grid-cols-2">
                    <PerfilDados texto="Modalidade" valor='' somenteLeitura={true} />
                    <PerfilDados texto="Nome" valor='' somenteLeitura={!editar} />
                    <PerfilDados texto="Número" valor='' somenteLeitura={!editar} />
                    <PerfilDados texto="RG" valor='' somenteLeitura={!editar} />
                    <PerfilDados texto="CPF" valor='' somenteLeitura={!editar} />
                    <PerfilDados texto="Endereço" valor='' somenteLeitura={!editar} />

                </div>
                <div className="bg-white rounded-md w-1/2 h-auto m-2 ml-1 mt-0 p-6
                                flex flex-col items-center">
                    <h1 className="pt-5">21 Dias</h1>
                    <h4>Para o próximo pagamento</h4>
                    <div className="bg-gray-200 h-6 w-80 mt-8 rounded-xl"></div>
                </div>
            </div>
        </LayoutUser>
    )
}