import Material from "@/core/Material";
import Botao from "../Botao";
import DatePicker from "../DatePicker";
import EntradaPerfil from "../EntradaPerfil";
import Avaliacoes from "../Avaliacoes";

interface ModalAlunoMaterialProps {
    material?: Material
    funcionarioMudou?: (material: Material) => void
}

export default function ModalAlunoMaterial(props: ModalAlunoMaterialProps){
    const id = props.material?.id

    return(
        <div className="text-black">
            <section className="flex gap-4 bg-pink-300 rounded-lg p-3 my-3">      
                <div className="bg-white rounded-lg p-4 w-64">
                    <Avaliacoes/>
                </div>     

                <div className="bg-white rounded-lg p-3">
                    <h3>Comentários</h3>
                </div>
            </section>
        </div>
    )
}