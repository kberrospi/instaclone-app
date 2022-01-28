import { AuthUser, AuthState } from '../interfaces/auth';
import { types } from './types';


type AuthAction = 
  | { type: '[auth] login', payload: AuthUser }
  | { type: '[auth] logout', payload: AuthUser }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch ( action.type ) {
    case types.login :
      return {
        ...state,
        user:{ 
          ...action.payload,
          logged: true,
        }
        
      }

    case types.logout:
      return{
        user:{
          logged: false
        }
      }
  
    default:
      return state;
  }

}