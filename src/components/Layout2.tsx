import Link from 'next/link'
import Image from  'next/image'

export default function Layout(props: any){
    return (
        <div className="bg-white m-6 rounded-xl flex flex-col">
            <div className="flex justify-between px-24 py-10 items-center m-0">
                <Image src='/images/FELIPEALVESRBG2.png' width='250' height='100' alt='imagemDoCurso'/>
                <Link href="/">Cursos</Link>
                <Link href="quemSomos">Quem somos</Link>
                <Link href="/correcao">Correção de redação</Link>
                <Link href="/login" className="border-b-2 border-blue-500 px-12 py-1 font-bold">Entrar</Link>
                <Link href="/cadastro" className="text-white bg-blue-500 rounded-lg px-12 py-2 m-0">Cadastrar</Link>
            </div>
            <div className="px-24 py-6 h-fit mb-52">
                {props.children}
            </div>
            <div style={{backgroundColor: '#373E48', color: 'white'}}>
                <div className="p-14 px-20">
                    <h1 className="font-Montserrant text-2xl">Curso Felipe Alves</h1>
                    <h4>emailexemplo@gmail.com</h4>
                    <h4>(00) 00000-0000</h4>
                </div>
            </div>
        </div>
    )
}