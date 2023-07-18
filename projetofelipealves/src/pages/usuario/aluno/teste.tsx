import Link from 'next/link'
import Image from  'next/image'
import styles from 'C:/Users/ryanp/OneDrive/Documentos/GitHub/curso-redacao/projetofelipealves/src/styles/Layout.module.css'

interface LayoutUserProps{
    usuario: string
    children: any
}

export default function Teste(props: LayoutUserProps){

    function aluno(){
        return (
            <div>
                <Link href="/">Materiais</Link>
                <Link href="/">Turmas</Link>
                <Link href="/">Perfil</Link>
            </div>
        )
    }
    function professor(){
        return (
            <div>
                <Link href="/">Cursos</Link>
                <Link href="/">Cursos</Link>
                <Link href="/">Cursos</Link>
            </div>
        )
    }
    function root(){
        return (
            <div>
                <Link href="/">Cursos</Link>
                <Link href="/">Cursos</Link>
                <Link href="/">Cursos</Link>
            </div>
        )
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-slate-200 m-8 rounded-xl w-11/12 h-5/6'>
                <div className="flex flex-row w-full h-full">
                    <div className="bg-white rounded-md flex flex-col items-start justify-center px-14 gap-5">
                        <Image src='/images/FELIPEALVESRBG15.png' width='125' height='50' alt='imagemDoCurso'/>
                        {props.usuario == 'aluno' ? aluno(): props.usuario == 'professor' ? professor() : root()}
                    </div>
                    <div className="bg-white rounded-md w-full m-2">{props.children}</div>
                </div>
            </div>
        </div>
    )
}