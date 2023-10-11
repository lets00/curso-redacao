import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import TabelaRoot from "@/components/TabelaRoot";
import Titulo from "@/components/Titulo";
import { useState } from "react";
import Aluno from "@/core/Aluno";
import Pesquisa from "@/components/Pesquisa";
import Modal from "@/components/Modal";
import ModalRootAlunos from "@/components/modals/ModalRootAlunos";
import ModalExcluir from "@/components/modals/ModalExcluir";

export default function RootAlunos() {

    const turmas = [
        new Aluno('Joao Carlos', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'Presencial terça/tarde',false , '123', "idTeste", false),
    new Aluno('teste 1', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 10, 'Presencial terça/tarde',false , '123', "idTeste1", false),
        new Aluno('Maria Luiza', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'Online terça/tarde',true , 'abc', "idTeste2", false),
    new Aluno('teste 2', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 15, 'Online terça/tarde',true , 'abc', "idTeste3", false),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento', 'Ações']
    const select1 = ['Todos(as)','Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']
    const select2 = ['Todos(as)','Pagamentos dia 10','Pagamento dia 15']

    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [openModal, setOpenModal] = useState(false)
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(turmas)
    const [filtro, setFiltro] = useState(null)

    
      const aoClicar = (conteudo: any) => {
        if(filtro === select1){

            if(conteudo == "Todos(as)"){
                setListagem(turmas);
            } else {
                const materiaisFiltrados = turmas.filter((aluno) => aluno.turma === conteudo);
                setListagem(materiaisFiltrados);
            }

        } else {

            if(conteudo == "Todos(as)"){
                setListagem(turmas);
            } else if (conteudo == "Pagamentos dia 10") {
                const materiaisFiltrados = turmas.filter((aluno) => aluno.mensalidade === 10);
                setListagem(materiaisFiltrados);
            } else {
                const materiaisFiltrados = turmas.filter((aluno) => aluno.mensalidade === 15);
                setListagem(materiaisFiltrados);
            }

        }
      }
    function alunoSelecionado(aluno: Aluno){
        setAluno(aluno)
    }
    function alunoExcluido(aluno: Aluno){
        setAluno(aluno)
        setTipoModal('excluir');
        setOpenModal(true)
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
        setTipoModal('selecionado')
        setOpenModal(true)
    }

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Alunos</Titulo>
            </div>
            <div className="flex flex-row items-center w-full">
                <Select seletor={select1}
                        titulo="Turma"
                        aoClicar={aoClicar}
                        setFiltro={setFiltro}/>
                <Select seletor={select2}
                        titulo="Mensalidade"
                        aoClicar={aoClicar}
                        setFiltro={setFiltro}/>
                <Pesquisa/>
            </div>
            <TabelaRoot objeto={listagem}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={alunoSelecionado}
                    objetoExcluido={alunoExcluido}
                    pagamento={pagamento}
                    />
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Pagamento': 'Tem certeza que deseja excluir:'}
            subtitulo={aluno.nome}>{tipoModal == 'selecionado' ? <ModalRootAlunos/>:<ModalExcluir/>}</Modal>
        </LayoutUser>
    )
}
