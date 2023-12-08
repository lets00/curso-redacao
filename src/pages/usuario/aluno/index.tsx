import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Tabela from "@/components/Tabela";
import ModalAlunoMaterial from "@/components/modals/ModalAlunoMaterial";
import Material from "@/core/Material";
import Comentario from "@/core/Comentario";
import Aluno from "@/core/Aluno";
import { useEffect, useState } from "react";
import { addDoc, updateDoc, deleteDoc, getFirestore, doc, collection, getDocs} from 'firebase/firestore';
import {getStorage, ref, getDownloadURL } from 'firebase/storage'
import {db, storage} from "@/backend/config"
import ListarMateriais from "../funcionario/listarMateriais";
import { Firestore, DocumentData } from 'firebase/firestore';

export default function Aluno() {

    useEffect(() => {
        const carregarDados = async () => {
          const querySnapshot = await getDocs(collection(db, 'materiais'));
          const dadosFirestore = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
    
          const dadosComLinks = await Promise.all(
            dadosFirestore.map(async (material) => {
              const url = await getDownloadURL(ref(storage, `materiais/${material.id}.pdf`));
              return { ...material, url };
            })
          );
    
          setLista(dadosComLinks);
        };
    
        carregarDados();
      }, []);

    const dados = ['nome', 'descricao', 'data']
    const cabecalho = ['Título', 'Descrição', 'Data de publicação', `Avaliar & Enviar redações`]
    const select = ['Redação','Linguagem','Matemática']

    const [comentarios, setComentarios] = useState<Comentario[]>([]);
    const [lista, setLista] = useState<{ url: string; id: string }[]>([]);
    const [material, setMaterial] = useState<Material>(Material.vazio());
    const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())
    const [comentario, setComentario] = useState<Comentario>(Comentario.vazio())
    const [botaoAtivo, setBotaoAtivo] = useState<string>('redacao');
    const [openModal, setOpenModal] = useState(false)
    const [professor, setProfessor] = useState<Professor>(Professor.vazio())

    
    //Filtro da lista
    const aoClicar = (conteudo: any, botao: any) => {
        setLista(conteudo);
        setBotaoAtivo(botao);
      };

     // Lista
     function materialSelecionado(material: Material | { id: string }) {
      
      const comentariosFiltrados = comentarios.filter(
          (comentario) => comentario.idMaterial === material.id && comentario.idUsuario === aluno.id
      );
      if (comentariosFiltrados.length > 0) {
          setComentario(comentariosFiltrados[0]);
      } else {
          setComentario(Comentario.vazio());
      }
      setOpenModal(true);
  }
  

    //Comentário
    async function salvarComentario(comentarioNovo: Comentario){
        if (!comentarioNovo.texto || !comentarioNovo.estrelas) {
            alert("Preencha todos os campos obrigatórios.");
            return;
          }

          const comentarioRef = await addDoc(collection(db, 'comentarios'), {
            idMaterial: material.id,
            idUsuario: aluno.id,
            texto: comentarioNovo.texto,
            estrelas: comentarioNovo.estrelas,
            data: new Date().toISOString(),
          });
      
        
    setComentarios([...comentarios, comentarioNovo]);       
    setOpenModal(false);
    }
    function novoProfessor(){
        setProfessor(Professor.vazio())
        setOpenModal(true)
    }

    async function editarComentario(comentarioEditado: Comentario){
        const indexToEdit = comentarios.findIndex((comentario) => comentario.id === comentarioEditado.id);
      
        if (!comentarioEditado.id) {
          console.error("ID do funcionário não definido.");
          setOpenModal(false);
          return;
      } 

        if (indexToEdit !== -1) {
          const comentarioDoc = doc(db, 'comentarios', comentarioEditado.id);
            await updateDoc(comentarioDoc, {
              texto: comentarioEditado.texto,
              estrelas: comentarioEditado.estrelas,
            });
        
            const listaAtualizada = [...comentarios];
            listaAtualizada[indexToEdit] = comentarioEditado;
            setComentarios(listaAtualizada);
        } else {
          alert("Comentário não encontrado");
        }
        setOpenModal(false)
      }

      async function excluirComentario(comentarioExcluido: Comentario) {
        if (!comentarioExcluido.id) {
            console.error("ID do comentário não definido.");
            setOpenModal(false);
            return;
        }
    
        const comentarioDoc = doc(db, 'comentarios', comentarioExcluido.id);
        await deleteDoc(comentarioDoc);
    
        const comentariosFiltrados = comentarios.filter((comentarioLista) => comentarioLista.id !== comentarioExcluido.id);
        setComentarios(comentariosFiltrados);
        setOpenModal(false);
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
                        <button onClick={() => aoClicar(lista, 'redacao')} 
                        className={`border-b-2 ${botaoAtivo === 'redacao' ? 'border-blue-400' : 'border-slate-200'} hover:border-blue-400`}>Redação</button>
                        <button onClick={() => aoClicar(ListarMateriais, 'linguagem')} 
                        className={`border-b-2 ${botaoAtivo === 'linguagem' ? 'border-blue-400' : 'border-slate-200'} hover:border-blue-400`}>Linguagem</button>
                    </div>
                </div>
                <Tabela objeto={lista} 
                        propriedadesExibidas={dados}
                        cabecalho={cabecalho}
                        objetoSelecionado={materialSelecionado}
                        ></Tabela>
            </section>
            
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo='Avalie o material'
            subtitulo={material.nome}><ModalAlunoMaterial material={material} comentario={comentario} aluno={aluno} salvarComentario={salvarComentario} editarComentario={editarComentario} excluirComentario={excluirComentario}/></Modal>

        </LayoutUser>
    )
}