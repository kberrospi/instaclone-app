export interface FormValuesLogin {

  email: string,
  password: string

}

export interface FormValuesRegister {

  name: string,
  email: string,
  password: string,
  password2: string,
  userName: string,
  

}

export interface AuthUser{

  uid?: string,
  userName?: string,
  logged: boolean

}

export interface AuthState {

  user?: AuthUser,
  

}