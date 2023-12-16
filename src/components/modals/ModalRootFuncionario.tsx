import Funcionario from "@/core/Funcionario";
import EntradaPerfil from "../EntradaPerfil";
import { useState } from "react";
import {Botao} from "../Botao";
import { addDoc, updateDoc, doc, getDoc, deleteDoc, DocumentData, collection, Firestore } from 'firebase/firestore';
import { db } from '@/backend/config';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";


interface ModalRootFuncionarioProps {
    funcionario: Funcionario;
    adicao?: (funcionario: Funcionario) => void
    editar?: (funcionario: Funcionario) => void
    setOpenModal?: (open: boolean) => void
    tipoModal?: string;
}
    
  export default function ModalRootFuncionario(props: ModalRootFuncionarioProps){
    const id = props.funcionario?.id
    const [nome, setNome] = useState(props.funcionario?.nome ?? '')
    const [cpf, setCpf] = useState(props.funcionario?.cpf ?? '')
    const [rg, setRg] = useState(props.funcionario?.rg ?? '')
    const [celular, setCelular] = useState(props.funcionario?.celular ?? '')
    const [email, setEmail] = useState(props.funcionario?.email ?? '')
    const [senha, setSenha] = useState(props.funcionario?.senha ?? '')
    const tipoModal = props.tipoModal;
    const auth = getAuth();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            nome,
            cpf,
            rg,
            celular,
            email,
            senha,
          };

          try {
            if (id) {
                const funcionarioRef = doc(db, 'Funcionario', id);
                await updateDoc(funcionarioRef, formData);

                console.log('Dados do funcionário atualizados com sucesso.');
                const funcionarioSnapshot = await getDoc(funcionarioRef);
                const funcionarioAtualizado = funcionarioSnapshot.data() as Funcionario;

                props.editar?.(funcionarioAtualizado);
            } else {

              const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
              const user = userCredential.user;
      
              const docRef = await addDoc(collection(db, "Funcionario"), formData);
      
              console.log("Dados do funcionário salvos com ID:", docRef.id);
      
              const funcionarioSnapshot = await getDoc(doc(db, 'Funcionario', docRef.id));
              const novoFuncionario = funcionarioSnapshot.data() as Funcionario;
      
              props.adicao?.(novoFuncionario);
            }
      
            setNome("");
            setCpf("");
            setRg("");
            setCelular("");
            setEmail("");
      
            props.setOpenModal?.(false);
          } catch (error) {
            console.error("Erro ao salvar os dados no Firestore", error);
          }
        }

        
  async function excluirFuncionario(id: any) {
    try {
        console.log('ID do Funcionário a ser excluído:', id);
        const funcionarioRef = doc(db, 'Funcionario', id.toString());
        await deleteDoc(funcionarioRef);
        console.log(`Funcionário excluído do Firebase.`);
    } catch (error) {
        console.error('Erro ao excluir o funcionário no Firebase:', error);
    }
} 

async function exclusao() {
    try {
        const funcionarioSelecionado = props.funcionario;

        if (funcionarioSelecionado) {
            await excluirFuncionario(funcionarioSelecionado.id);
            props.setOpenModal?.(false);  
        } else {
            alert("Funcionário não encontrado");
        }
    } catch (error) {
        console.error('Erro ao excluir o funcionário no Firebase:', error);
    }
}
    
    const addFuncionario = async (formData: any) => {
      const docRef = await addDoc(collection(db, "Funcionario"), formData);
    
      console.log("Dados do funcionário salvos com ID:", docRef.id);
    
      const funcionarioSnapshot = await getDoc(doc(db, 'Funcionario', docRef.id));
      const novoFuncionario = funcionarioSnapshot.data() as Funcionario;
    
      props.adicao?.(novoFuncionario);
    }

    return(
        <div>
            <div className="grid grid-rows-2 grid-flow-col bg-blue-200 rounded-lg p-3 my-3">
                {id ? (
                    <EntradaPerfil somenteLeitura texto="Id" valor={id}/>
                ) : null}
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Nome" valor={nome} valorMudou={(valor) => setNome(valor)}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="CPF" valor={cpf} valorMudou={(valor) => setCpf(valor)}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="RG" valor={rg} valorMudou={(valor) => setRg(valor)}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Celular" valor={celular} valorMudou={(valor) => setCelular(valor)}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Email" valor={email} valorMudou={(valor) => setEmail(valor)}/>
                <EntradaPerfil className="text-white" className2="bg-white rounded-xl text-black" texto="Senha" valor={senha} valorMudou={(valor) => setSenha(valor)}/>
            </div>
            <div className="flex place-content-end">
                <Botao className="p-10 bg-blue-400" cor="blue"
                    onClick={() => {
                      if (id) {
                          props.editar?.(new Funcionario(nome, cpf, rg, celular, email, senha, id, false));
                          console.log("funcionou")
                          props.setOpenModal?.(false);
                      } else {
                          props.adicao?.(new Funcionario(nome, cpf, rg, celular, email, senha, undefined, false));
                          props.setOpenModal?.(false);
                      }
                  }}>
                {id ? 'Alterar':'Criar funcionário'}  </Botao>
            </div>
        </div>
    )
}