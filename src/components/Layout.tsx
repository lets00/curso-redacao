import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Layout(props: any) {
    return (
        <div className={`bg-white flex flex-col flex-wrap m-6 rounded-lg text-black`}>
            <header className={`flex m-6 justify-between items-center`}>
                <div>
                    <Image src='/images/FELIPEALVESRBG2.png' width='250' height='100' alt='imagemDoCurso' />
                </div>
                <div className={`flex justify-between items-center`}>
                    <Link className={`mr-2`} href="/">Cursos</Link>
                    <Link className={`mr-2`} href="quemSomos">Quem somos</Link>
                    <Link className={`mr-2`} href="/correcao">Correção de redação</Link>
                </div>
                <Link href="/login" className={styles.entrar}>Entrar</Link>
                <Link href="/cadastro" className={styles.cadastro}>Cadastrar</Link>
            </header>
            <div className={styles.conteudo}>
                {props.children}
            </div>
            <div style={{ backgroundColor: '#373E48', color: 'white' }}>
                <div className="p-14 px-20">
                    <h1 className="font-Montserrant text-2xl">Curso Felipe Alves</h1>
                    <h4>emailexemplo@gmail.com</h4>
                    <h4>(00) 00000-0000</h4>
                </div>
            </div>
        </div>
    )
}