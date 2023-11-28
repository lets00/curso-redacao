import LayoutUser from "@/components/LayoutUser";
import Tabela from "@/components/Tabela";
import Titulo from "@/components/Titulo";
import Turma from "@/core/Turma";

export default function TurmasAluno() {

    interface UserProfile {
        turma: string[];
    }

    const alunoTurmas = [
        // aqui seria pegar as turmas em que cada userProfile.turma[y] da array turma (do aluno) é igual a uma turmas[x].id de turmas
        new Turma ('presencial - terça/tarde', 'Redação', 'Felipe Alves','Terça-feira', '14h', 'Presencial', 'idTeste', false),
        new Turma ('online - sábado/tarde', 'Matemática', 'André Torres','Sábado', '14h', 'Online', 'idTeste2', false)
    ]
    const dados = ['nome', 'dia', 'horario', 'professor']
    const cabecalho = ['Matéria', 'Dia', 'Horário', 'Professor']

    return (
        <LayoutUser divisoes usuario={'aluno'} className="text-black">

            <section className="bg-white rounded-md w-auto h-auto m-2 mb-0 p-3">
                <div className="flex place-content-left items-center">
                    <div className="
                        flex justify-center items-center
                        rounded-full p-4 ml-4 mr-0 bg-slate-300"/>
                    <Titulo className="font-Montserrant">Nome do Aluno</Titulo>
                </div>
            </section>

            <section className="bg-white rounded-md w-auto h-5/6 m-2 mb-0">
                <div className="flex justify-center p-5 font-semibold">
                    <h3>Suas Turmas</h3>
                </div>
                <Tabela objeto={alunoTurmas} 
                        propriedadesExibidas={dados}
                        cabecalho={cabecalho}></Tabela>
            </section>
            
        </LayoutUser>
    )
}