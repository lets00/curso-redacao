import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import ModalAlunoMaterial from "@/components/modals/ModalAlunoMaterial";
import Material from "@/core/Material";
import Comentario from "@/core/Comentario";
import Aluno from "@/core/Aluno";
import { useState } from "react";
import Turma from "@/core/Turma";

export default function AlunoIndex() {

    const materiais = [
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'https://correcao.cursofelipealves.com.br/student/login', 'Redação', 'Presencial terça/tarde', 'Abner', new Date(),'id1' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'Presencial terça/tarde', 'João', new Date(),'id2' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'Presencial sábado/tarde', 'João', new Date(),'id3' , false)
    ]
    const dados = ['nome', 'descricao', 'data']
    const cabecalho = ['Título', 'Descrição', 'Data de publicação', `Avaliar & Enviar redações`]
    const select = ['Redação','Linguagem','Matemática']

    const [comentarios, setComentarios] = useState<Comentario[]>([])
    const [material, setMaterial] = useState<Material>(Material.vazio())
    const [comentario, setComentario] = useState<Comentario>(Comentario.vazio())
    const [openModal, setOpenModal] = useState(false)

    //Aluno que seria o aluno logado
    const aluno = new Aluno('Maria Luiza', new Date('2023-11-31'), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, ["idTurma1", "idTurma3"],true , 'abc', "idTeste2", false);
    const [listaTurmas, setListaTurmas] = useState([
        new Turma('Presencial terça/tarde', 'Linguagem', 'Felipe Alves', 'terça-feira', '14h', 'Presencial', 'idTurma1', false),
        new Turma('Online terça/tarde', 'Redação', 'Wellington', 'terça-feira', '14h', 'Online', 'idTurma2', false),
        new Turma('Presencial sábado/tarde', 'Redação', 'Wellington', 'sábado', '14h', 'Presencial', 'idTurma3', false)
      ])
    const turmasDoAluno = listaTurmas.filter(turma =>
        aluno.turma.some(alunoTurmaId => alunoTurmaId === turma.id)
    );
    const [materiaisFiltrados, setMateriaisFiltrados] = useState<Material[]>(aluno.turma.length != 0 ? materiais.filter((material) => material.turma === turmasDoAluno[0]?.nome) : [])
    const [azul, setAzul] = useState(aluno.turma.length != 0 ? turmasDoAluno[0].nome : '')

    
    //Filtro da lista
    const aoClicar = (turma: string) => {
        setMateriaisFiltrados(materiais.filter((material) => material.turma === turma));
        setAzul(turma)
    };

    //Lista
    function materialSelecionado(material: Material) {
        setMaterial(material);
        // Filtrar os comentários com base no idMaterial
        const comentariosFiltrados = comentarios.filter((comentario) => comentario.idMaterial === material.id && comentario.idUsuario === aluno.id);
        // Verificar se há algum comentário correspondente
        if (comentariosFiltrados.length > 0) {
            // Definir o estado setComentario com o primeiro comentário encontrado
            setComentario(comentariosFiltrados[0]);
        } else {
            // Se não houver nenhum comentário correspondente, definir setComentario com um novo Comentario.vazio()
            setComentario(Comentario.vazio());
        }
        setOpenModal(true);
    }

    //Comentário
    function salvarComentario(comentarioNovo: Comentario){
        if (!comentarioNovo.texto || !comentarioNovo.estrelas) {
            alert("Preencha todos os campos obrigatórios.");
            return;
          }
        setComentarios([...comentarios,comentarioNovo])
        setOpenModal(false)
    }

    function editarComentario(comentarioEditado: Comentario){
        const indexToEdit = comentarios.findIndex((comentario) => comentario.id === comentarioEditado.id);
      
        if (indexToEdit !== -1) {
          const listaAtualizada = [...comentarios];
          listaAtualizada[indexToEdit] = comentarioEditado;
          setComentarios(listaAtualizada);
        } else {
          alert("Comentário não encontrado");
        }
        setOpenModal(false)
      }

    function excluirComentario(){
        console.log(comentario.id)
        console.log(comentarios)
        const comentariosFiltrados = comentarios.filter((comentarioLista) => comentarioLista.id !== comentario.id);
        setComentarios(comentariosFiltrados);
        setOpenModal(false)
    }

    return (
        <LayoutUser divisoes usuario={'aluno'} className="text-black">

            <section className="bg-white rounded-md w-auto h-auto m-2 mb-0 p-3">
                <div className="flex place-content-left items-center">
                    <div className="
                        flex justify-center items-center
                        rounded-full p-4 ml-4 mr-0 bg-slate-300"/>
                    <div className="ml-5 mt-1 font-Montserrant">
                        <h4 className="ml-1">Olá, Nome do Aluno,</h4>
                        <h2>Bem vindo de volta!</h2>
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-md w-auto h-4/5 m-2 mb-0">
                <div className="ml-8 py-4">
                    <h3 className="font-Monteserrant font-semibold">Materiais</h3>
                    {turmasDoAluno.map(turma => (
                        <button
                            key={turma.id}
                            onClick={() => aoClicar(turma.nome)}
                            className={`border-b-2 hover:border-blue-400 mr-4 ${turma.nome == azul ? 'border-blue-400' : ''}`}>
                            {turma.disciplina}
                        </button>
                    ))}
                </div>
                <Tabela objeto={materiaisFiltrados} 
                        propriedadesExibidas={dados}
                        cabecalho={cabecalho}
                        objetoSelecionado={materialSelecionado}
                        linkDoObjeto></Tabela>
            </section>
            
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Avalie o material'
            subtitulo={material.nome}><ModalAlunoMaterial material={material} comentario={comentario} aluno={aluno} salvarComentario={salvarComentario} editarComentario={editarComentario} excluirComentario={excluirComentario}/></Modal>

        </LayoutUser>
    )
}