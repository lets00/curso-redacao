import {Botao} from "@/components/Botao";
import LayoutUser from "@/components/LayoutUser";
import Image from "next/image"
import Funcionario from "@/core/Funcionario";
import { useState, useEffect } from "react";
import EntradaPerfil from "@/components/EntradaPerfil";
import ImageTeste from "@/components/ImageUploader";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";

interface UserProfile {
    nome: string;
    celular: string;
    cpf: string;
    email: string;
    rg: string;
    senha: string;
    id: string;
}

export default function PerfilFuncionario() {

    const [editar, setEditar] = useState(true)
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser as any;
    
        if (user) {
          const firestore = getFirestore();
          const alunosRef = collection(firestore, "Funcionario");
          const q = query(alunosRef, where("cpf", "==", user.cpf));
    
          getDocs(q)
            .then((querySnapshot) => {
              if (!querySnapshot.empty) {
                const alunoData = querySnapshot.docs[0].data() as UserProfile;
                setUserProfile(alunoData);
              }
            })
            .catch((error) => {
              console.error("Erro ao buscar informações do Firestore:", error);
            });
        }
      }, []);

        const [nome, setNome] = useState(userProfile?.nome ?? '')
        const [celular, setCelular] = useState(userProfile?.celular ?? '')
        const [cpf, setCpf] = useState(userProfile?.cpf ?? '')
        const [email, setEmail] = useState(userProfile?.email ?? '')
        const [rg, setRg] = useState(userProfile?.rg ?? '')
        const [id, setId] = useState(userProfile?.id ?? '')
        const [senha, setSenha] = useState(userProfile?.senha ?? '')

        function salvarFuncionario(funcionario: Funcionario){
            setEditar(!editar)
        }

    return (
        <LayoutUser usuario={'funcionario'} className="flex flex-col gap-2 text-black" divisoes>
            
            <section className="bg-white rounded-md w-auto h-1/2 m-2 mb-0">
                <div className="bg-gradient-to-r from-pink-500 to-pink-700 h-1/2 rounded-md"></div>
                <div className="flex flex-row">
                    <figure className="-mt-20 ml-12 mr-2">
                        <ImageTeste readOnly={editar} className="p-24" base64Image={null} onImageUpload={function (base64Image: string): void {
                            throw new Error("Function not implemented.");
                        } }/>
                    </figure>
                    <h2 className="mt-10 ml-5 ">{nome}</h2>
                    <Botao onClick={() => salvarFuncionario(
                        new Funcionario(nome, cpf, rg, celular, email, senha, id, false))} 
                    className="m-10 p-10 bg-blue-400">{editar == true ? 'Alterar':'Salvar'}</Botao>
                </div>
            </section>

            <div className="h-1/2 flex flex-row">

            {userProfile &&(
                <section className="bg-white rounded-md w-1/2 h-auto m-2 mr-1 mt-0 p-6
                                grid grid-cols-2">
                    <EntradaPerfil texto="Nome" valor={userProfile.nome} somenteLeitura={editar} valorMudou={setNome} />
                    <EntradaPerfil texto="Número" valor={userProfile.celular}  somenteLeitura={editar} valorMudou={setCelular} />
                    <EntradaPerfil texto="Email" valor={userProfile.email}  somenteLeitura={editar} valorMudou={setEmail} />
                    <EntradaPerfil texto="CPF" valor={userProfile.cpf}  somenteLeitura={editar} valorMudou={setCpf} />
                </section>
                )}
                <figure className="bg-white rounded-md w-1/2 h-auto m-2 ml-1 mt-0 
                                flex flex-col items-center">
                    <Image src='/images/logoLOGIN.png' width='250' height='250' alt='imagemDoCurso'/>
                </figure>

            </div>
        </LayoutUser>
    )
}