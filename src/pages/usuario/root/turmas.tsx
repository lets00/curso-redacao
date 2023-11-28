import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import {Botao} from "@/components/Botao";
import Modal from "@/components/Modal";
import ModalRootTurma from "@/components/modals/ModalRootTurma";
import ModalExcluir from "@/components/modals/ModalExcluir";
import ModalRootALunos from "@/components/modals/ModalRootAlunos";
import Turma from "@/core/Turma";

export default function RootTurmas() {

    const alunos = [
        new Aluno('teste 1', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 10, ['idTurma3'],false , '123', "idTeste1", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, ['idTurma1','idTurma3'],true , 'abc', "idTeste2", false),
        new Aluno('teste 2', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 15, ['idTurma1'],true , 'abc', "idTeste3", false),
    ]
    const [listaTurmas, setListaTurmas] = useState([
        new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'Presencial', 'idTurma1', false),
        new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'Online', 'idTurma2', false),
        new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'Presencial', 'idTurma3', false),
    ])

    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const [select, setSelect] = useState(['Todos(as)', ...listaTurmas.map((turma: { nome: any }) => turma.nome)])

    const [openModal, setOpenModal] = useState(false)
    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(alunos)
    const [filtragem, setFiltragem] = useState(listagem)
    const [filtro, setFiltro] = useState('Todos(as)')
    const [recarregar, setRecarregar] = useState(false)

    
    const aoClicar = () => {
        if(filtro == "Todos(as)"){
            setFiltragem(listagem);
        } else {
            const alunosFiltrados = listagem.filter((aluno) =>
                aluno.turma.some((turmaId) =>
                    listaTurmas.find((turma) => turma.id === turmaId && turma.nome === filtro)
                )
            );
            setFiltragem(alunosFiltrados);
        }
        setRecarregar(false)
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
        setRecarregar(true);
    }
    function edicao(alunoEditado: Aluno){
        const indexToEdit = listagem.findIndex((aluno) => aluno.id === alunoEditado.id);
        if (indexToEdit !== -1) {
            const listaAtualizada = [...listagem];
            listaAtualizada[indexToEdit] = alunoEditado;
            setListagem(listaAtualizada);
            setOpenModal(false);
        } else {
            setOpenModal(false);
        }
        setRecarregar(true);
    }

    useEffect(() => {
        if (recarregar || filtro) {
            aoClicar();
        }
    }, [recarregar, filtro]);

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
                {tipoModal == 'selecionado' ? <ModalRootTurma turmas={listaTurmas} setTurmas={setListaTurmas} turmasSeletor={select} turmaSelecionada={turmaSelecionada} setSelect={setSelect}/>: 
                tipoModal == 'excluir' ? <ModalExcluir objeto={aluno} exclusao={exclusao}/> :
                <ModalRootALunos aluno={aluno} novoAluno={alunoSelecionado} listaTurmas={listaTurmas} editar={edicao}/>}</Modal>

        </LayoutUser>
    )
}
