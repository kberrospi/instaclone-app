import { MutationFunction } from "@apollo/client";
import { toast } from 'react-toastify';
import { AuthContextProps } from "../context/AuthContext";
import { types } from "../context/types";
import { AuthUser, FormValuesLogin, FormValuesRegister } from "../interfaces/auth";

export const helperRegister = (formValue: FormValuesRegister, register: any, login: any) =>{

  const { password2, ...input } = formValue;

  register({
    variables:{
      input
    }
  }).then(( res:any ) => {

    const { id } = res.data.register
    const input = { id }

    login({
      variables:{
        input
      }
    }).then(( res: any ) => {

      const { login } = res.data;
      console.log( login )

    }).catch(( error: any ) => console.log(error))

  }).catch(( error: any ) => console.log( error.message) );

}

export const helperLogin = (
    formValue: FormValuesLogin, 
    login: MutationFunction, 
    context: AuthContextProps  
  ) =>{

  
  const { dispatch } = context
  const { email, password } = formValue;
  const input = { email, password };

  const notify = (error: string) => {
    toast.error(error, { theme:'dark' }) ;
  }

  login({
    variables: {
      input
    }
  }).then(( res ) => {

    const { token, uid, name } = res.data.login;
    localStorage.setItem('token', token);

    const user = {
      uid,
      name,
      logged: true
    }

    dispatch( loginAction( user ) )
    
  })
  .catch(( error ) => {
    notify(error.message)
  });

}

const loginAction = ( user:AuthUser ) =>{

  return {
    type: types.login,
    payload: user
  }
}