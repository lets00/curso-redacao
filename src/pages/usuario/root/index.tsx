import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import Pesquisa from "@/components/Pesquisa";
import Modal from "@/components/Modal";
import ModalRootPagamento from "@/components/modals/ModalRootPagamento";
import ModalExcluir from "@/components/modals/ModalExcluir";
import ModalRootALunos from "@/components/modals/ModalRootAlunos";
import Turma from "@/core/Turma";

export default function RootAlunos() {

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, ['idTurma2'],false , '123', "idTeste", false),
        new Aluno('teste 1', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 10, ['idTurma3'],false , '123', "idTeste1", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, ['idTurma1','idTurma3'],true , 'abc', "idTeste2", false),
        new Aluno('teste 2', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 15, ['idTurma1'],true , 'abc', "idTeste3", false),
    ]
    const listaTurmas = [
        new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'Presencial', 'idTurma1', false),
        new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'Online', 'idTurma2', false),
        new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'Presencial', 'idTurma3', false),
    ]
    
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento', 'Ações']
    //aqui o seletor vai mostrar apenas as turmas que existem no BD
    const select1 = ['Todos(as)', ...listaTurmas.map((turma: { nome: any }) => turma.nome)]
    const select2 = ['Todos(as)','Pagamentos dia 10','Pagamentos dia 15']

    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [openModal, setOpenModal] = useState(false)
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(turmas)
    const [filtragem, setFiltragem] = useState(listagem)
    const [filtro1, setFiltro1] = useState('Todos(as)')
    const [filtro2, setFiltro2] = useState('Todos(as)')
    const [recarregar, setRecarregar] = useState(false)
    
      const aoClicar = () => {
        let filtragemResultante = listagem;
        if (filtro1 !== "Todos(as)") {
            filtragemResultante = filtragemResultante.filter((aluno) =>
                aluno.turma.some((turmaId) =>
                    listaTurmas.find((turma) => turma.id === turmaId && turma.nome === filtro1)
                )
            );
        }
        if (filtro2 === "Pagamentos dia 10") {
            filtragemResultante = filtragemResultante.filter(aluno => aluno.mensalidade === 10);
        } else if (filtro2 === "Pagamentos dia 15") {
            filtragemResultante = filtragemResultante.filter(aluno => aluno.mensalidade === 15);
        }    
        setFiltragem(filtragemResultante);
        setRecarregar(false)
      }
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
        setTipoModal("editar")
        setOpenModal(true)
    }
    function alunoExcluido(aluno: Aluno){
        setAluno(aluno)
        setTipoModal('excluir');
        setOpenModal(true)
    }
    function pagamento(){
        setAluno(aluno)
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
        const indexToEdit = listagem.findIndex((funcionario) => funcionario.id === alunoEditado.id);
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
        if (recarregar || filtro1 || filtro2) {
            aoClicar();
        }
    }, [recarregar, filtro1, filtro2]);

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Alunos</Titulo>
            </div>
            <div className="flex flex-row items-center w-full">
                <Select seletor={select1}
                        titulo="Turma"
                        setFiltro={setFiltro1}/>
                <Select seletor={select2}
                        titulo="Mensalidade"
                        setFiltro={setFiltro2}/>
                <Pesquisa/>
            </div>
            <TabelaRoot objeto={filtragem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={alunoSelecionado}
                    objetoExcluido={alunoExcluido}
                    pagamento={pagamento}
                    />
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Pagamento' : tipoModal == 'excluir' ? 'Tem certeza que deseja excluir:': "Editar Aluno"}
            subtitulo={tipoModal == 'excluir' ? aluno.nome : ''}>
            {tipoModal == 'selecionado' ? <ModalRootPagamento objeto={aluno}/>: tipoModal == 'excluir' ? <ModalExcluir objeto={aluno} exclusao={exclusao} />: 
            <ModalRootALunos listaTurmas={listaTurmas} aluno={aluno} novoAluno={alunoSelecionado} editar={edicao}/>}</Modal>
        </LayoutUser>
    )
}
