import { ApolloProvider } from "@apollo/client";
import { useReducer } from "react";
import client from "./config/apollo";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./context/AuthContext";
import { authReducer } from "./context/authReducer";
import { AppRouter } from "./router/AppRouter";


const init = () => {

  const token: any = localStorage.getItem('token');
  
  if( token ){
    const decoded: any = jwt_decode( token );
    const { uid, name } = decoded;
    return {
      user:{
        uid,
        name,
        logged: true
      }
    }
    
  }else{
    return {
      user:{
        logged: false
      }
    }
  }
}

export const InstacloneApp = () => {

  const [ authState, dispatch ] = useReducer(authReducer , {}, init );

  return(
    <ApolloProvider client={ client } >
      <AuthContext.Provider value={{
        authState,
        dispatch
      }}>
        <AppRouter />
      </AuthContext.Provider>
      
    </ApolloProvider>
  )
};
