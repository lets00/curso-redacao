import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import Aluno from "@/core/Aluno";
import Pesquisa from "@/components/Pesquisa";
import Modal from "@/components/Modal";
import ModalRootAlunos from "@/components/modals/ModalRootAlunos";

export default function RootAlunos() {

    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [openModal, setOpenModal] = useState(false)

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'presencial - terça/tarde',false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'online - terça/noite',true , 'abc', "idTeste2", false),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento', 'Ações']
    const select1 = ['Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']
    const select2 = ['Pagamentos dia 10','Pagamento dia 15']
    
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
    }
    function alunoExcluido(aluno: Aluno){
    }
    function salvarAluno(aluno: Aluno){
        setOpenModal(false)
    }
    function novoAluno(){
        setAluno(Aluno.vazio())
        setOpenModal(true)
    }
    function pagamento(){
        setAluno(aluno)
        setOpenModal(true)
    }

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Alunos</Titulo>
            </div>
            <div className="flex flex-row items-center w-full">
                <Select seletor={select1}
                        titulo="Turma"/>
                <Select seletor={select2}
                    titulo="Mensalidade"/>
                <Pesquisa/>
            </div>
            <TabelaRoot objeto={turmas}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={alunoSelecionado}
                    objetoExcluido={alunoExcluido}
                    pagamento={pagamento}
                    />
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Pagamento'
            subtitulo={aluno.nome}><ModalRootAlunos/></Modal>
        </LayoutUser>
    )
}
