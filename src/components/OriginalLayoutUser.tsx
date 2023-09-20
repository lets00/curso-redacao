import Link from 'next/link'
import Image from  'next/image'

interface LayoutUserProps{
    usuario: string
    children: any
    className?: string
    divisoes?: boolean
}

export default function Teste(props: LayoutUserProps){

    function aluno(){
        return (
            <>
                <Link href="/usuario/aluno">Materiais</Link>
                <Link href="/usuario/aluno/turmas">Turmas</Link>
                <Link href="/usuario/aluno/perfil">Perfil</Link>
            </>
        )
    }
    function funcionario(){
        return (
            <>
                <Link href="/usuario/funcionario/materiais">Materiais</Link>
                <Link href="/usuario/funcionario/turmas">Turmas</Link>
                <Link href="/usuario/funcionario/live">Live</Link>
                <Link href="/usuario/funcionario/listarMateriais">Listar Materiais</Link>
                <Link href="/usuario/funcionario">Perfil</Link>
            </>
        )
    }
    function root(){
        return (
            <>
                <Link href="/usuario/root/materiais">Materiais</Link>
                <Link href="/usuario/root/turmas">Turmas</Link>
                <Link href="/usuario/root/live">Live</Link>
                <Link href="/usuario/root/funcionarios">Funcionários</Link>
                <Link href="/usuario/root">Alunos</Link>
            </>
        )
    }

    return (
        <div className='flex justify-center items-center h-screen text-black'>
            <div className='bg-slate-200 m-8 rounded-xl w-11/12 h-5/6'>
                <div className="flex flex-row w-full h-full">
                    
                    <div className="bg-white w-72 rounded-md">
                        <figure className='relative my-0 mt-3 p-5'>
                            <Image src='/images/FELIPEALVESRBG2.png' width='200' height='100' alt='imagemDoCurso'/>
                        </figure>
                        <nav className='flex flex-col items-start m-14 mr-12 gap-5'>
                            {props.usuario == 'aluno' ? aluno(): props.usuario == 'funcionario' ? funcionario() : root()}
                        </nav>
                    </div>

                    {props.divisoes? 
                     (<div className={`w-full  ${props.className}`}>{props.children}</div>):
                     (<div className={`bg-white rounded-md w-full m-2 p-6 ${props.className}`} >{props.children}</div>)}
                </div>
            </div>
        </div>
    )
}