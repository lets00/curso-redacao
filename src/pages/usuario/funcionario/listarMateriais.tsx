import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import Material from "@/core/Material";
import Link from "next/link";
import { useState } from "react";

export default function ListarMateriais() {

    const [material, setMaterial] = useState<Material>(Material.vazio())

    const materiais = [
        new Material('Material da aula sobre Redação 1', 'Descrição breve desse documento', 'ARQUIVO', 'LINK', 'Redação', 'presencial terça/tarde', 'Abner', new Date(0),'id' , false),
        new Material('Material da aula sobre Redação 2', 'Descrição breve desse documento', 'ARQUIVO2', 'LINK2', 'Redação', 'presencial terça/manhã', 'João', new Date(0),'id' , false)
    ]
    const dados = ['nome','descricao','professor']
    const cabecalho = ['Nome', 'Descrição', 'Criador', 'Opções']
    const select = ['Redação','Linguagem','Matemática']
    
    function materialSelecionado(material: Material){
        setMaterial(material)
    }
    function materialExcluido(material: Material){
    }
    function salvarMaterial(material: Material){
    }
    function novoMaterial(){
        setMaterial(Material.vazio())
    }

    return (
        <LayoutUser usuario={'funcionario'}>
            <div className="flex place-content-between">
                <Titulo>Listar Materiais</Titulo>
                <Link href="/usuario/funcionario/Materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Postar Material</Link>
            </div>
            <Select seletor={select}
                    titulo="Disciplina"/>
            <Tabela objeto={materiais}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    objetoSelecionado={materialSelecionado}
                    objetoExcluido={materialExcluido}
                    />

        </LayoutUser>
    )
}