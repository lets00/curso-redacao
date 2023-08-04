import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalFuncionario from "@/components/modals/ModalProfessor";
import Professor from "@/core/Professor";
import { useState } from "react";

export default function Aluno() {

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
        <LayoutUser usuario={'aluno'} className="flex flex-col gap-2">
            <div className="h-1/2 flex place-content-between bg-black ">
                <Titulo>Perfil do Aluno</Titulo>
            </div>
            <div className="h-1/2 flex flex-row gap-3">
                <div className="w-1/2 h-full bg-purple-600">

                </div>
                <div className="w-1/2 h-full bg-red-600">

                </div>
            </div>
        </LayoutUser>
    )
}