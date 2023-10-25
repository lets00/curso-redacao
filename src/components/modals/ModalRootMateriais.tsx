import Material from "@/core/Material";
import Avaliacoes from "../Avaliacoes";
import Comentarios from "../Comentarios";

interface ModalAlunoMaterialProps {
    material?: Material
    funcionarioMudou?: (material: Material) => void
}

export default function ModalAlunoMaterial(props: ModalAlunoMaterialProps){
    const id = props.material?.id

    return(
        <div className="text-black">
            <section className="flex gap-3 bg-pink-300 rounded-lg p-3 my-3">      
                <div className="bg-white rounded-lg p-4 w-full">
                    <Avaliacoes/>
                </div>     

                <div className="bg-white rounded-lg p-2 w-full">
                    <Comentarios/>
                </div>
            </section>
        </div>
    )
}