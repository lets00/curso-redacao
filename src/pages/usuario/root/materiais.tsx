import LayoutUser from "@/components/LayoutUser";
import Modal from "@/components/Modal";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import ModalExcluir from "@/components/modals/ModalExcluir";
import ModalRootMateriais from "@/components/modals/ModalRootMateriais";
import Material from "@/core/Material";
import Aluno from "@/core/Aluno";
import Comentario from "@/core/Comentario";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '@/backend/config';

export default function RootMateriais() {

    const [materiais, setMateriais] = useState<Material[]>([]);
    const [comentarios, setComentarios] = useState([]);
    const [alunos, setAlunos] = useState([])
    const dados = ['nome', 'data', 'professor']
    const cabecalho = ['Título', 'Data de publicação', 'Quem publicou', `Ver feedback & Excluir`]
    const [select, setSelect] = useState<{ value: string; label: string }[]>([]);
    const [material, setMaterial] = useState<Material>(Material.vazio())
    const [openModal, setOpenModal] = useState(false)
    const [tipoModal, setTipoModal] = useState('')
    const [listagem, setListagem] = useState(materiais)
    const [filtragem, setFiltragem] = useState(listagem)
    const [filtro, setFiltro] = useState('Todos(as)')

    useEffect(() => {
        const fetchDisciplinas = async () => {
          try {
            const disciplinasCollection = collection(db, "Turmas");
            const querySnapshot = await getDocs(disciplinasCollection);
            const disciplinasData = querySnapshot.docs.map((doc) => {
              const data = doc.data();
              return {
                value: doc.id,
                label: data && data.nome,
              };
            });
    
            setSelect(disciplinasData); 
          } catch (error) {
            console.error('Erro ao buscar disciplinas:', error);
          }
        };
    
        fetchDisciplinas();
      }, []);

    const aoClicar = () => {
        if (filtro === 'Todos(as)') {
            setFiltragem(listagem);
        } else {
            const materiaisFiltrados = listagem.filter((material) => material.disciplina === filtro);
            setFiltragem(materiaisFiltrados);
        }
    };

    useEffect(() => {
        aoClicar();
    }, [filtro, listagem]);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const materialsCollection = collection(db, "Material"); 
                const querySnapshot = await getDocs(materialsCollection);
                const materials = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        ...data,
                        id: doc.id, 
                    } as Material;
                });
                setListagem(materials);
            } catch (error) {
                console.error('Erro ao buscar materiais:', error);
            }
        };
    
        fetchMaterials();
    }, []);

    function materialSelecionado(material: Material){
        setMaterial(material);
        setTipoModal('selecionado')
        setOpenModal(true);
    }
    function materialExcluido(material: Material){
        setMaterial(material);
        setTipoModal('excluir')
        setOpenModal(true)
    }
    function exclusao(id: any){
        const materiaisFiltrados = listagem.filter((material) => material.id !== id);
        setListagem(materiaisFiltrados);
        setOpenModal(false);
        console.log(materiaisFiltrados);
    }

    useEffect(() => {
        aoClicar();
    }, [filtro, exclusao])

    return (
        <LayoutUser usuario={'root'} className="text-black">
            <div className="flex place-content-between">
                <Titulo>Materiais</Titulo>
            </div>
            <Select
            seletor={select.map(item => ({ value: item.value, label: item.label }))}
            titulo="Disciplina"
            setFiltro={setFiltro}
            />
            <Tabela objeto={filtragem} 
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={materialSelecionado}
                    objetoExcluido={materialExcluido}></Tabela>   
            <Modal isOpen={openModal} isNotOpen={() => setOpenModal(!openModal)} cor='white' titulo={tipoModal == 'selecionado' ? 'Análise de Feedback': 'Tem certeza que deseja excluir:'}
            subtitulo={material.nome}>{tipoModal == 'selecionado' ? <ModalRootMateriais comentarios={comentarios} material={material} alunos={alunos} />:<ModalExcluir objeto={material} exclusao={exclusao}/>}</Modal>         
        </LayoutUser>
    )
}