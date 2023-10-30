import Material from "@/core/Material";
import Avaliacoes from "../Avaliacoes";
import Comentarios from "../Comentarios";
import Comentario from "@/core/Comentario";
import Aluno from "@/core/Aluno";

interface ModalAlunoMaterialProps {
    material: Material
    comentarios: Comentario[]
    alunos: Aluno[]
}

export default function ModalAlunoMaterial(props: ModalAlunoMaterialProps){
    const id = props.material.id
    const comentarioFiltrado = props.comentarios.filter((comentario: any) => comentario.idMaterial === props.material.id);

    return(
        <div className="text-black">
            <section className="flex gap-3 bg-pink-300 rounded-lg p-3 my-3">      
                <div className="bg-white rounded-lg p-4 w-full">
                    <Avaliacoes comentarios={comentarioFiltrado}/>
                </div>     

                <div className="bg-white rounded-lg p-2 w-full">
                    <Comentarios comentarios={comentarioFiltrado} alunos={props.alunos}/>
                </div>
            </section>
        </div>
    )
}