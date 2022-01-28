import { createContext } from "react";
import { AuthState } from '../interfaces/auth';


export type AuthContextProps = {
  authState: AuthState,
  dispatch: any
} 


export const AuthContext = createContext< AuthContextProps >({} as AuthContextProps)