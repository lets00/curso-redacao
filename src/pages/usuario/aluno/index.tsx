import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import ModalAlunoMaterial from "@/components/modals/ModalAlunoMaterial";
import Material from "@/core/Material";
import Comentario from "@/core/Comentario";
import Aluno from "@/core/Aluno";
import { useState } from "react";

export default function AlunoIndex() {


    const materiais = [
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'https://correcao.cursofelipealves.com.br/student/login', 'Redação', 'presencial terça/tarde', 'Abner', new Date(),'id1' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(),'id2' , false)
    ]
    const materiais2 = [
        new Material('Material de teste', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(),'id3' , false),
        new Material('Material de teste', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(),'id4' , false)
    ]
    const dados = ['nome', 'descricao', 'data']
    const cabecalho = ['Título', 'Descrição', 'Data de publicação', `Avaliar & Enviar redações`]
    const select = ['Redação','Linguagem','Matemática']

    const [lista, setLista] = useState(materiais)
    const [material, setMaterial] = useState<Material>(Material.vazio())
    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [comentario, setComentario] = useState<Comentario>(Comentario.vazio())
    const [botaoAtivo, setBotaoAtivo] = useState('redacao');
    const [openModal, setOpenModal] = useState(false)

    //Filtro da lista
    const aoClicar = (conteudo: any, botao: any) => {
        setLista(conteudo);
        setBotaoAtivo(botao);
      };
    //Lista
    function materialSelecionado(material: Material){
        setMaterial(material)
        setOpenModal(true)
    }
    //Comentário
    function salvarComentario(comentarioNovo: Comentario){
        console.log(comentarioNovo)
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
                    <div className="flex ml-3 gap-2">
                        <button onClick={() => aoClicar(materiais, 'redacao')} 
                        className={`border-b-2 ${botaoAtivo === 'redacao' ? 'border-blue-400' : 'border-slate-200'} hover:border-blue-400`}>Redação</button>
                        <button onClick={() => aoClicar(materiais2, 'linguagem')} 
                        className={`border-b-2 ${botaoAtivo === 'linguagem' ? 'border-blue-400' : 'border-slate-200'} hover:border-blue-400`}>Linguagem</button>
                    </div>
                </div>
                <Tabela objeto={lista} 
                        propriedadesExibidas={dados}
                        cabecalho={cabecalho}
                        objetoSelecionado={materialSelecionado}
                        linkDoObjeto></Tabela>
            </section>
            
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Avalie o material'
            subtitulo={material.nome}><ModalAlunoMaterial material={material} comentario={comentario} aluno={aluno} salvarComentario={salvarComentario}/></Modal>

        </LayoutUser>
    )
}