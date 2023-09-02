import LayoutUser from "@/components/LayoutUser";
import Select from "@/components/Select";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import Link from "next/link";
import { useState } from "react";
import Material from "@/core/Material";
import Aluno from "@/core/Aluno";

export default function ListarMateriais() {

    const [material, setMaterial] = useState<Material>(Material.vazio())

    const materiais = [
        new Aluno('joao', new Date(2004-10-10), 'PE', 'rua teste', '111-111', 'jasha@gmail',
    'jose', 'carla', 'rgrgrg', 'cpfcpf', 15, 'presencial - terça/tarde', '123', "idTeste"),
        new Aluno('maria', new Date(2004-10-10), 'RJ', 'rua testew', '222-111', 'mari@gmail',
    'pedro', 'ana', 'rg2', 'cpf2', 10, 'online - terça/noite', 'abc', "idTeste2"),
    ]
    const dados = ['natural','nome','cpf','pagamento']
    const cabecalho = ['Estado', 'Nome', 'CPF', 'Pagamento']
    const select = ['Presencial terça/tarde', 'Online terça/tarde', 'Presencial sábado/tarde']
    
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
                <Titulo>Teste por enquanto</Titulo>
                <Link href="/usuario/funcionario/Materiais" className="px-10 mx-8 py-2 rounded-md text-white bg-pink-400">Postar Material</Link>
            </div>
            <Select seletor={select}
                    titulo="Disciplina"/>
            <Tabela objeto={materiais}
                    propriedadesExibidas={dados}
                    cabecalho={cabecalho}
                    //objetoSelecionado={materialSelecionado}
                    //objetoExcluido={materialExcluido}
                    />

        </LayoutUser>
    )
}