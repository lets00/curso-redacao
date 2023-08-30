import React, { createContext, PropsWithChildren, useState } from 'react';
import firebase from '../../backend/config'
import Usuario from '@/model/Usuario';
import Formulario from '@/components/Formulario';
import Aluno from '@/pages/usuario/aluno';

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
    usuario?: Usuario;
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider: React.FC<PropsWithChildren<AuthContextProps>> = (props) => {
    const [usuario, setUsuario] = useState<Usuario>()

    async function login(email,senha) {
        try{
            const resp = await firebase.auth()
            .signInWithEmailAndPassword(email,senha)
            route.push('/')

        } finally{

        }
    }
    
    return (
        <AuthContext.Provider value={{
            usuario
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext