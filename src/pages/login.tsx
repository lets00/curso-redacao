import Botao from '@/components/Botao';
import Entrada from '@/components/Entrada';
import { IconeFechar, IconeVoltar } from '@/components/Icones';
import Image from 'next/image';
import Link from 'next/link';

import db from "../config/db";

import { collection, query, where, getDocs } from "firebase/firestore";

export default function () {

    async function login() {
        const collectionRef = collection(db, 'Funcionario')

        try {
            const q = query(collectionRef,
                where("email", "==", "teste@teste.com"),
                where("senha", "==", "teste123")
            );

            const result = await getDocs(q);
            result.forEach(doc => {
                const data = doc.data();
                console.log(data);
            })
        } catch (error) {
            console.error("Erro ao buscar documentos:", error);
        }

        //   Obter todos os funcionários
        // try {
        //     const querySnapshot = await getDocs(collectionRef);
        //     querySnapshot.forEach((doc) => {
        //         const data = doc.data();
        //         console.log("Documento ID:", doc.id, "Dados:", data);
        //     });
        // } catch (error) {
        //     console.error("Erro ao buscar documentos:", error);
        // }

    }

    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center bg-blue-400 text-white
                            w-1/2 h-screen p-20">

                <div className='flex flex-col items-start pb-10'>
                    <Link href="/" className="
                            flex justify-center items-center
                            rounded-full p-1 m-1">
                        {IconeVoltar}
                    </Link>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='font-Montserrant text-center'>Juntos, construiremos o seu futuro</h2>
                    <Image src='/images/logoLOGIN.png' width='400' height='400' alt='imagemDoCurso' />
                </div>

            </div>
            <div className="bg-gray-700 w-1/2 p-28 flex flex-col justify-center">

                <div className="flex flex-col">
                    <label htmlFor="email" className="font-Montserrant text-gray-300"> E-mail </label>
                    <input type='email' id="email" name="email" className={`border-b border-gray-400 focus:outline-none py-2 px-5 mb-7 bg-transparent text-white`}
                        placeholder='Digite seu e-mail' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="senha" className="font-Montserrant text-gray-300"> Senha </label>
                    <input type='password' id="senha" name="senha" className={`border-b border-gray-400 focus:outline-none py-2 px-5 mb-7 bg-transparent text-white`}
                        placeholder='Digite sua senha' />
                </div>
                <div className="flex items-center mb-6">
                    <input id="default-checkbox" type="checkbox" value=""
                        className="w-4 h-4 text-pink-600 bg-gray-100  rounded-xl
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300"><a href="" className="hover:underline text-gray-400">Mantenha-me conectado</a></label>
                </div>
                <div className='flex items-center gap-7 pt-10'>
                    <button className="text-white py-2 rounded-md px-16 bg-blue-300" onClick={login}>Entrar</button>
                    <button className='text-gray-400 border-b border-blue-400'>Esqueci a senha</button>
                </div>

            </div>
        </div>
    )
}