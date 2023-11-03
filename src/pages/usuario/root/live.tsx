import {Botao} from "@/components/Botao";
import Checkbox from "@/components/Checkbox";
import DatePicker from "@/components/DatePicker";
import EntradaPerfil from "@/components/EntradaPerfil";
import LayoutUser from "@/components/LayoutUser";
import Titulo from "@/components/Titulo";

export default function RootLive() {

    return (
        <LayoutUser usuario={'root'} className="text-black">

            <Titulo>Marcar Live</Titulo>
            <Checkbox titulo="Modalidade" opcoes={['Online','Presencial']}/>
            <Checkbox titulo="Turma (as)" opcoes={['Segunda 18h45 - 21h45','Terça 9h - 12h','Terça 14h - 17h','Terça 18h45 - 21h45']}/>
            <div className="grid grid-cols-1 w-fit">
                <EntradaPerfil texto="Título" placeholder="Digite o título da live" className={'ml-9 mt-2 w-full'}/>
                <EntradaPerfil texto="Link" placeholder="Link para acessar a live" className={'ml-9 mt-2 w-full'} obrigatorio/>
                <DatePicker titulo="Data Selecionada" classname="ml-9"/>
                <Botao className="w-36 bg-blue-400 ml-9 mt-4" cor={'blue'}>Marcar</Botao>
            </div>

        </LayoutUser>
    )
}