import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Button, Container, Form, Image } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { useContext } from 'react';
import * as Yup from 'yup'

import instaclone from '../../assets/images/instaclone.png'
import { initFormLogin } from "../../helpers/initForms";
import { validFormLogin } from "../../helpers/validForm";
import { helperLogin } from "../../helpers/helperAuth";
import { AuthContext } from '../../context/AuthContext';
import { LOGIN } from "../../graphql/mutation/usersMutation";
import '../../scss/auth/auth.scss'
import '../../scss/auth/authForm.scss';
import { ToastContainer } from "react-toastify";

export const LoginScreen = () => {

  const { object } = Yup;
  const [ login ] = useMutation(LOGIN);
  const context =  useContext( AuthContext )

  const formik = useFormik({
    initialValues: initFormLogin,
    validationSchema: object( validFormLogin ),
    onSubmit: async(formValue) => 
    helperLogin( formValue, login, context )
  }); 
  const { handleSubmit, handleChange, errors, touched, handleBlur } = formik;
  const { email, password } = formik.values;

  return (
    
    <Container fluid className="auth">
      <Image src={ instaclone } />

      <div className="container-form">
        <h2 className="form-title" > Entra para ver fotos y videos de tus amigos </h2>
        <Form className="form" onSubmit={ handleSubmit }>
            
          <Form.Input 
            type='email' 
            name='email' 
            placeholder="Email"
            onChange={ handleChange }
            value={ email }
            onBlur={ handleBlur }
            error={ errors.email && touched.email && { content: errors.email } }
          />

          <Form.Input 
            type='password' 
            name='password' 
            placeholder="Contraseña"
            onChange={ handleChange }
            value={ password }
            onBlur={ handleBlur }
            error={ errors.password && touched.password && { content: errors.password } }
          />

          <Button className="btn-submit" type='submit' > Iniciar Sesion </Button>
        </Form>
      </div>

      <div className="change-form">
        <p> 
          ¿ No tienes una cuenta ?
          <Link to='/register'> <span> Registrate </span> </Link>
        </p>
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={ 5000 }
        closeOnClick
        draggable
        pauseOnHover
        pauseOnFocusLoss
      />
    </Container>
  );
};
