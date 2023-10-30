import Entrada from "./Entrada";
import { useEffect, useState } from "react";
import Aluno from "@/core/Aluno";
import { Botao } from "./Botao";
import DatePicker from "./DatePicker";
import AlunoRepositorio from "@/core/AlunoRepositorio";
import db from '../backend/config'
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from "@/data/hook/useAuth";


interface FormularioProps{
    aluno: Aluno
}

 export default function Formulario(props: FormularioProps){
    const initialData = props.aluno?.data ? new Date(props.aluno.data) : new Date();

    const id = props.aluno?.id
    const [nome, setNome] = useState(props.aluno?.nome ?? '')
    const [data, setData] = useState(initialData);
    const [natural, setNatural] = useState(props.aluno?.natural ?? '')
    const [endereco, setEndereco] = useState(props.aluno?.endereco ?? '')
    const [celular, setCelular] = useState(props.aluno?.celular ?? '')
    const [email, setEmail] = useState(props.aluno?.email ?? '')
    const [pai, setPai] = useState(props.aluno?.pai ?? '')
    const [mae, setMae] = useState(props.aluno?.mae ?? '')
    const [rg, setRg] = useState(props.aluno?.rg ?? '')
    const [cpf, setCpf] = useState(props.aluno?.cpf ?? '')
    const [senha, setSenha] = useState(props.aluno?.senha ?? '')
<<<<<<< HEAD
     
=======
    const [mensalidade, setMensalidade] = useState(props.aluno?.mensalidade ?? '')
    const [alunos, setAlunos] = useState<Aluno[]>([])
    const [termosDeUso, setTermosDeUso] = useState(false);

    const auth = getAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!termosDeUso) {
            console.error("Você deve aceitar os termos de uso para continuar.");
            return;
        }

        if (senha.length < 6) {
            console.error("A senha deve ter pelo menos 6 caracteres.");
            return;
        }
>>>>>>> backend
    
        const formData = {
          nome,
          data,
          natural,
          endereco,
          celular,
          email,
          pai,
          mae,
          rg,
          cpf,
          senha,
          mensalidade,
        };
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

          const docRef = await addDoc(collection(db, "alunos"), formData);
    
          console.log("Dados do aluno salvos com ID:", docRef.id);
    
          setNome("");
          setData(initialData);
          setNatural("");
          setEndereco("");
          setCelular("");
          setEmail("");
          setPai("");
          setMae("");
          setRg("");
          setCpf("");
          setEmail("");
          setMensalidade(0);
          setTermosDeUso(false);

          
        } catch (error) {
          console.error("Erro ao salvar os dados no Firestore", error);
        }
      };
      
      const handleTermosDeUsoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTermosDeUso(e.target.checked);
    };

    return (
<<<<<<< HEAD
        <div className="text-black">
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} placeholder="Digite seu nome COMPLETO"/>
            <DatePicker titulo="Data de Nascimento"/>
            <Entrada texto="Naturalidade ( Cidade/Estado )" valor={natural} valorMudou={setNatural} placeholder="Digite seu Estado ( ex: PE )"/>
            <Entrada texto="Endereço ( Rua, Nº, Bairro)" valor={endereco} valorMudou={setEndereco} placeholder="Digite sua rua, número e cidade"/>
            <Entrada texto="Número de celular (com DDD)" valor={celular} valorMudou={setCelular} placeholder="(**)****-****"/>
            <Entrada texto="E-mail" valor={email} valorMudou={setEmail} placeholder="Digite seu e-mail"/>
            <Entrada texto="Senha" valor={senha} valorMudou={setSenha} tipo="password" placeholder="Digite sua senha"/>
            <Entrada texto="Senha (novamente)" valor={senha} valorMudou={setSenha} tipo="password" placeholder="Digite sua senha novamente"/>
            <Entrada texto="Nome do Pai" valor={pai} valorMudou={setPai} placeholder="Digite o nome do seu pai"/>
            <Entrada texto="Nome da Mãe" valor={mae} valorMudou={setMae} placeholder="Digite o nome da sua mãe"/>
            <h2 className="font-Montserrant">Documentação</h2><br />
            <Entrada texto="RG" valor={rg} valorMudou={setRg} placeholder="Digite seu RG"/>
            <Entrada texto="CPF" valor={cpf} valorMudou={setCpf} placeholder="Digite seu CPF"/>

            <label className="font-Montserrant">Data de preferência para pagamento</label>
            <div className="flex flex-row items-center gap-6 pt-4">
                <div className="flex items-center">
                    <input   id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-black">Dia 10</label>
                </div>
                <div className="flex items-center">
                    <input   checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100"/>
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-black">Dia 15</label>
=======
        <div>
            <form onSubmit={handleSubmit}>
            <Entrada texto="Nome" valor={nome} valorMudou={(e) => setNome(e.target.value)} placeholder="Digite seu nome COMPLETO" />
            <DatePicker/>
            <Entrada texto="Naturalidade ( Cidade/Estado )" valor={natural} valorMudou={(e) => setNatural(e.target.value)} />
            <Entrada texto="Endereço ( Rua, Nº, Bairro)" valor={endereco} valorMudou={(e) => setEndereco(e.target.value)} />
            <Entrada texto="Número de celular (com DDD)" valor={celular} valorMudou={(e) => setCelular(e.target.value)} placeholder="(**)****-****" />
            <Entrada texto="E-mail" valor={email} valorMudou={(e) => setEmail(e.target.value)} />
            <Entrada texto="Nome do Pai" valor={pai} valorMudou={(e) => setPai(e.target.value)} />
            <Entrada texto="Nome da Mãe" valor={mae} valorMudou={(e) => setMae(e.target.value)} />
            <Entrada texto="Senha" valor={senha} valorMudou={(e) => setSenha(e.target.value)} />
            <h2 className="font-Montserrant">Documentação</h2><br />
            <Entrada texto="RG" valor={rg} valorMudou={(e) => setRg(e.target.value)} />
            <Entrada texto="CPF" valor={cpf} valorMudou={(e) => setCpf(e.target.value)} />
            
            <label className="font-Montserrant">Data de preferência para pagamento</label>
            <div className="flex flex-row items-center gap-6 pt-4">
                <div className="flex items-center">
                    <input onChange={() => setMensalidade(10)}id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dia 10</label>
                </div>
                <div className="flex items-center">
                    <input onChange={() => setMensalidade(15)}checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-pink-600 bg-gray-100
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dia 15</label>
>>>>>>> backend
                </div>
            </div>

            <div className="pt-28 flex-col">
                <div className="flex items-center mb-6">
<<<<<<< HEAD
                    <input id="default-checkbox" type="checkbox" value="" 
                    className="w-4 h-4 text-pink-600 bg-gray-100  rounded-xl"/>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-black"><a href="" className="hover:underline">Termos de uso</a></label>
=======
                    <input id="default-checkbox" type="checkbox" value="" checked={termosDeUso} onChange={handleTermosDeUsoChange}
                    className="w-4 h-4 text-pink-600 bg-gray-100  rounded-xl
                            dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900 dark:text-gray-300"><a href="" className="hover:underline">Termos de uso</a></label>
>>>>>>> backend
                </div>
                <Botao type="submit" className="px-12">
                 Próximo
                </Botao>
                
            </div>
            </form>
        </div>  
    )
    } 