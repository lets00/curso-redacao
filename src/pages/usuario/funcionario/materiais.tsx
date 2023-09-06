import Botao from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import EntradaPerfil from "@/components/EntradaPerfil";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";
import Link from "next/link";

export default function Materiais() {

    return (
        <LayoutUser usuario={'funcionario'}>

            <div className="flex place-content-between">
                <Titulo>Postar Material</Titulo>
                <Link href="/usuario/funcionario/Materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Listar Materiais</Link>
            </div>
            <Checkbox titulo="Modalidade" opcoes={['Online','Presencial']}/>
            <Checkbox titulo="Turma (as)" opcoes={['Segunda 18h45 - 21h45','Terça 9h - 12h','Terça 14h - 17h','Terça 18h45 - 21h45']}/>
            <div className="grid grid-cols-2 w-fit">
                <EntradaPerfil texto="Título" placeholder="Digite o título da atividade" className={'ml-9 mt-2 w-full'}/>
                <EntradaPerfil texto="Descrição" placeholder="Digite a descrição da atividade" className={'ml-9 mt-2 w-full'}/>
                <EntradaPerfil texto="Link" placeholder="Link usado no material (opcional)" className={'ml-9 mt-2 w-full'}/>
                <EntradaPerfil texto="Arquivos" placeholder="Solte os arquivos aqui" className={'ml-9 mt-2 w-full'}/>
                <Botao className="w-36 bg-blue-400 ml-9 mt-4" cor={'blue'}>Enviar</Botao>
            </div>

        </LayoutUser>
    )
}