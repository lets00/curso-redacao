import Material from "@/core/Material";
import Avaliacoes from "../Avaliacoes";
import Comentarios from "../Comentarios";
import Comentario from "@/core/Comentario";
import Aluno from "@/core/Aluno";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '@/backend/config'


interface ModalAlunoMaterialProps {
    material: Material
    comentarios: Comentario[]
    alunos: Aluno[]
}

export default function ModalAlunoMaterial(props: ModalAlunoMaterialProps){
    const id = props.material.id
    const comentarioFiltrado = props.comentarios.filter((comentario: any) => comentario.idMaterial === props.material.id);
    const [modalComments, setModalComments] = useState<Comentario[]>([]);

    const fetchComments = async () => {
        try {
          const commentsCollection = collection(db, "comentario");
          const q = query(commentsCollection, where("materialID", "==", props.material.id));
          const querySnapshot = await getDocs(q);
          const comments = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              ...data,
              id: doc.id,
            } as Comentario;
          });
          setModalComments(comments);
        } catch (error) {
          console.error("Erro na busca de comentários:", error);
        }
      };
    
      useEffect(() => {
        if (props.material.id) {
          fetchComments();
        }
      }, [props.material.id]);
    
      return (
        <div className="text-black">
          <section className="flex gap-3 bg-pink-300 rounded-lg p-3 my-3">
            <div className="bg-white rounded-lg p-4 w-full">
              <Avaliacoes comentarios={modalComments} />
            </div>
    
            <div className="bg-white rounded-lg p-2 w-full">
              <Comentarios comentarios={modalComments} alunos={props.alunos} />
            </div>
          </section>
        </div>
      );
    }