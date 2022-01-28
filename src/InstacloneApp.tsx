import { ApolloProvider } from "@apollo/client";
import { useReducer } from "react";
import client from "./config/apollo";
import { AuthContext } from "./context/AuthContext";
import { authReducer } from "./context/authReducer";
import { AppRouter } from "./router/AppRouter";


const initState = {

  user:{
    uid: '',
    name: '',
    logged: false
  }

}


export const InstacloneApp = () => {

  const [ authState, dispatch] = useReducer(authReducer , initState );

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
