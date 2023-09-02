import Checkbox from "@/components/Checkbox";
import EntradaPerfil from "@/components/EntradaPerfil";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Link from "next/link";

export default function ListarMateriais() {

    return (
        <LayoutUser usuario={'funcionario'}>

            <div className="flex place-content-between">
                <Titulo>Postar Material</Titulo>
                <Link href="/usuario/funcionario/Materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Listar Materiais</Link>
            </div>
            <Checkbox titulo="Modalidade" opcoes={['Online','Presencial']}/>
            <Checkbox titulo="Turma (as)" opcoes={['Segunda 18h45 - 21h45','Terça 9h - 12h','Terça 14h - 17h','Terça 18h45 - 21h45']}/>
            <EntradaPerfil texto="Título" placeholder="Digite o título da atividade" className={'ml-9 mt-2 w-1/3'}/>
            <EntradaPerfil texto="Descrição" placeholder="Digite a descrição da atividade" className={'ml-9 mt-2 w-1/3'}/>
            <EntradaPerfil texto="Arquivos" placeholder="Solte os arquivos aqui" className={'ml-9 mt-2 w-1/3'}/>
            <EntradaPerfil texto="Link" placeholder="Link usadp no material (opcional)" className={'ml-9 mt-2 w-1/3'}/>

        </LayoutUser>
    )
}