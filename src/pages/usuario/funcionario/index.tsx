import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";

export default function ListarMateriais() {

    return (
        <LayoutUser usuario={'funcionario'}>
            <div className="flex place-content-between">
                <Titulo>Tela Inicial Funcionario</Titulo>
                <Botao >Botao</Botao>
            </div>
        </LayoutUser>
    )
}