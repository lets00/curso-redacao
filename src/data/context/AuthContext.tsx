/*import React, { createContext, PropsWithChildren, useState } from 'react';
import firebase from '../../backend/config'
import Usuario from '@/model/Usuario';
import Formulario from '@/components/Formulario';
import Aluno from '@/pages/usuario/aluno';
import route from 'next/router';

//async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
    //const token = await usuarioFirebase.getIdToken()
   // return{
      //  uid: usuarioFirebase.uid,
      //  nome: usuarioFirebase.displayName,
       // email: usuarioFirebase.email,
      //  token,
       // provedor: usuarioFirebase.providerData[0]?.providerId
   // }
//}

interface AuthContextProps {
    usuario?: Usuario
    login?: (email: string, senha: string) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider: React.FC<PropsWithChildren<AuthContextProps>> = (props) => {
    const [usuario, setUsuario] = useState<Usuario>()

    async function login(email: string, senha: string) {
       try{
            const resp = await firebase.auth()
            .signInWithEmailAndPassword(email,senha)
            route.push('/')

        } finally{

      }
   }

   async function cadastrar(email: string, senha: string) {
    try{
         const resp = await firebase.auth()
         .createUserWithEmailAndPassword(email,senha)
         route.push('/')


     } finally{

   }
}
    
    return (
        <AuthContext.Provider value={{
            usuario,
            login
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext 
*/