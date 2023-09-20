import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import Aluno from "@/core/Aluno";
import Botao from "@/components/Botao";
import Modal from "@/components/Modal";
import ModalRootTurma from "@/components/modals/ModalRootTurma";

export default function RootTurmas() {

    const [openModal, setOpenModal] = useState(false)
    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'presencial - terça/tarde',false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'online - terça/noite',true , 'abc', "idTeste2", false),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const select = ['Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']
    
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
    }
    function alunoExcluido(aluno: Aluno){
    }
    function turmaSelecionada(){
        setOpenModal(true)
    }

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Turmas</Titulo>
                <Botao onCLick={() => turmaSelecionada()} className="mx-8 px-10">Gerenciar Turmas</Botao>
            </div>
            <Select seletor={select}
                    titulo="Turma"/>
            <Tabela objeto={turmas}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={alunoSelecionado}
                    objetoExcluido={alunoExcluido}
                    />
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Titulo'
            subtitulo='Subtitulo'></Modal>

            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Gerenciar turma'
            ><ModalRootTurma turmas={select} turmaSelecionada={turmaSelecionada}/></Modal>

        </LayoutUser>
    )
}
