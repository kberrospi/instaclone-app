import * as Yup from 'yup';

export const validFormRegister = {
  name: Yup.string().required('Tu nombre es requerido'),
  userName: Yup.string()
    .matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacios")
    .required('El nombre de usuario es obligatorio'),
  email: Yup.string().email('Email no valido').required('El email es obligatorio'),
  password: Yup.string()
    .required('Password es obligatorio')
    .oneOf([Yup.ref('password2')], 'Las contraseñas deben ser iguales'),
  password2: Yup.string()
    .required('Password2 es obligatorio')
    .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales'),
}

export const validFormLogin ={
  email: Yup.string().email('Email no valido').required('Escribe un email'),
  password: Yup.string().required('Escribe una contraseña')
}