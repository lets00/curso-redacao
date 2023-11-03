import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  userProfile: any; // Substitua 'any' pelo tipo correto do seu objeto de perfil de usuário.
  setUserProfile: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userProfile, setUserProfile] = useState<any>(null); // Substitua 'any' pelo tipo correto do seu objeto de perfil de usuário.

  return (
    <AuthContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};