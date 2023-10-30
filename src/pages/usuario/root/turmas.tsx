import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import Botao from "@/components/Botao";
import Modal from "@/components/Modal";
import ModalRootTurma from "@/components/modals/ModalRootTurma";
import ModalExcluir from "@/components/modals/ModalExcluir";
import ModalRootALunos from "@/components/modals/ModalRootAlunos";
import Turma from "@/core/Turma";

export default function RootTurmas() {

    const alunos = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'Presencial terça/tarde',false , '123', "idTeste", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'Online terça/tarde',true , 'abc', "idTeste2", false),
    ]
    const turmas = [
        new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'idA', false),
        new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'idB', false),
        new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'idC', false),
    ]

    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const select = ['Todos(as)','Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']

    const [openModal, setOpenModal] = useState(false)
    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(alunos)
    const [filtragem, setFiltragem] = useState(listagem)
    const [filtro, setFiltro] = useState('Todos(as)')

    
    const aoClicar = () => {
        if(filtro == "Todos(as)"){
            setFiltragem(listagem);
        } else {
            const materiaisFiltrados = listagem.filter((aluno) => aluno.turma === filtro);
            setFiltragem(materiaisFiltrados);
        }
      }
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
        setTipoModal("editar")
        setOpenModal(true)
    }
    function alunoExcluido(aluno: Aluno){
        setAluno(aluno);
        setTipoModal('excluir')
        setOpenModal(true)
    }
    function turmaSelecionada(){
        setTipoModal('selecionado')
        setOpenModal(true)
    }
    function exclusao(id: any){
        const materiaisFiltrados = listagem.filter((aluno) => aluno.id !== id);
        setListagem(materiaisFiltrados);
        setOpenModal(false);
    }
    function edicao(alunoEditado: Aluno){
        const indexToEdit = listagem.findIndex((funcionario) => funcionario.id === alunoEditado.id);
        if (indexToEdit !== -1) {
            const listaAtualizada = [...listagem];
            listaAtualizada[indexToEdit] = alunoEditado;
            setListagem(listaAtualizada);
            setOpenModal(false);
        } else {
            setOpenModal(false);
        }
    }

    useEffect(() => {
        aoClicar();
    }, [filtro, exclusao])

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Turmas</Titulo>
                <Botao onClick={() => turmaSelecionada()} className="mx-8 px-10">Gerenciar Turmas</Botao>
            </div>
            <Select seletor={select}
                    titulo="Turma"
                    setFiltro={setFiltro}/>
            <TabelaRoot objeto={filtragem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={alunoSelecionado}
                    objetoExcluido={alunoExcluido}
                    turmas
                    />
                    
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Gerenciar turma': tipoModal == 'excluir' ? 'Tem certeza que deseja excluir:' : "Editar Aluno"}
                subtitulo={tipoModal == 'excluir' ? aluno.nome : ''} >
                {tipoModal == 'selecionado' ? <ModalRootTurma turmas={turmas} turmasSeletor={select} turmaSelecionada={turmaSelecionada} setOpenModal={setOpenModal}/>: 
                tipoModal == 'excluir' ? <ModalExcluir objeto={aluno} exclusao={exclusao}/> :
                <ModalRootALunos aluno={aluno} novoAluno={alunoSelecionado} editar={edicao}/>}</Modal>

        </LayoutUser>
    )
}
