import Material from "@/core/Material";
import Botao from "../Botao";
import DatePicker from "../DatePicker";
import EntradaPerfil from "../EntradaPerfil";
import Avaliacoes from "../Avaliacoes";

interface ModalAlunoMaterialProps {
    material?: Material
}

export default function ModalAlunoMaterial(props: ModalAlunoMaterialProps){

    return(
        <div className="bg-white flex justify-center rounded-lg p-3">
            <button className="bg-red-500 text-white font-bold p-3 rounded-lg">Sim, excluir</button>
        </div>
    )
}