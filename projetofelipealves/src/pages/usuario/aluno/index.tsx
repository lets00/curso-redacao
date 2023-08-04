import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalProfessor from "@/components/modals/ModalProfessor";
import ModalFuncionario from "@/components/modals/ModalProfessor";
import Professor from "@/core/Professor";
import { useState } from "react";

export default function Aluno() {
    const [openModal, setOpenModal] = useState(false)
    const [professor, setProfessor] = useState<Professor>(Professor.vazio())

    const professores = [
        new Professor('Abner', "111111111", "2222222", "1"),
        new Professor('Junio', "333333333", "4444444", "2"),
        new Professor('Valdir', "555555555", "6666666", "3")
    ]
    function professorSelecionado(professor: Professor){
        setProfessor(professor)
        setOpenModal(true)
    }
    function professorExcluido(professor: Professor){
    }
    function salvarProfessor(professor: Professor){
        console.log(professor)
        setOpenModal(false)
    }
    function novoProfessor(){
        setProfessor(Professor.vazio())
        setOpenModal(true)
    }

    return (
        <LayoutUser usuario={'aluno'}>
            <div className="flex place-content-between">
                <Titulo>Teste Aluno</Titulo>
                <Botao onCLick={() => novoProfessor()} className="mx-8">Alterar algo</Botao>
            </div>
            <Tabela professores={professores} 
                    professorSelecionado={professorSelecionado}
                    professorExcluido={professorExcluido}></Tabela>
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Titulo'
            subtitulo='Subtitulo'><ModalProfessor professor={professor} professorMudou={salvarProfessor}/></Modal>
        </LayoutUser>
    )
}