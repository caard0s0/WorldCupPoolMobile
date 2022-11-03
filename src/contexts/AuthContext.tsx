import { createContext, ReactNode } from "react";

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps ) {

    async function signIn () {
        console.log("Let's Login!");
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Vinicius Cardoso',
                avatarUrl: 'https://github.com/caard0s0.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}