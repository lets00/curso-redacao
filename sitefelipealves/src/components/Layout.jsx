import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout(props){
    return (
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Título de Exemplo'}</h1>
                <Link href="/">Cursos</Link>
                <Link href="quemSomos">Quem somos</Link>
                <Link href="/">Correção de redação</Link>
                <Link href="/">Entrar</Link>
                <Link href="/">Cadastro</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}