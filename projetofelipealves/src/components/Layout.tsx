import Link from 'next/link'
import Image from  'next/image'
import styles from '../styles/Layout.module.css'

export default function Layout(props: any){
    return (
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
                <Image src='/images/FELIPEALVESRBG2.png' width='250' height='100' alt='imagemDoCurso'/>
                <Link href="/">Cursos</Link>
                <Link href="quemSomos">Quem somos</Link>
                <Link href="/correcao">Correção de redaçã o</Link>
                <Link href="/usuario/aluno" className={styles.entrar}>Entrar</Link>
                <Link href="/" className={styles.cadastro}>Cadastrar</Link>
            </div>
            <div className={styles.conteudo}>
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