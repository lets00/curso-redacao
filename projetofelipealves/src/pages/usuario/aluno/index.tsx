import Botao from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import Professor from "@/core/Professor";

export default function Aluno() {
    const professores = [
        new Professor('Abner', "111111111", "2222222"),
        new Professor('Junio', "333333333", "4444444"),
        new Professor('Valdir', "555555555", "6666666")
    ]

    function professorSelecionado(professor: Professor){

    }
    function professorExcluido(professor: Professor){

    }

    return (
        <LayoutUser usuario={'aluno'}>
            <div className="flex place-content-between">
                <Titulo>Teste Aluno</Titulo>
                <Botao className="mx-8">Alterar algo</Botao>
            </div>
            <Tabela professores={professores} 
                    professorSelecionado={professorSelecionado}
                    professorExcluido={professorExcluido}></Tabela>
        </LayoutUser>
    )
}