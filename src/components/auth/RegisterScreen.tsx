import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Button, Container, Form, Image } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import * as Yup from 'yup';

import { initFormRegister } from "../../helpers/initForms";
import { validFormRegister } from "../../helpers/validForm";
import { LOGIN, USER_REGISTER } from "../../graphql/mutation/usersMutation";
import instaclone from '../../assets/images/instaclone.png'
import '../../scss/auth/auth.scss';
import '../../scss/auth/authForm.scss';
import { helperRegister } from "../../helpers/helperAuth";


export const RegisterScreen = () => {

  const [ register ] = useMutation(USER_REGISTER);
  const [ login ] = useMutation(LOGIN);
  const { object }= Yup;
  const formik = useFormik({
    initialValues: initFormRegister,
    validationSchema: object( validFormRegister ),
    onSubmit: async(formValue) => 
    helperRegister(formValue, register, login)
  }); 
  const { handleSubmit, handleChange, errors } = formik
  const { name, userName, email, password, password2 } = formik.values;

  return (
    
    <Container fluid className="auth">
      <Image src={ instaclone } />

      <div className="container-form">
        
        <h2 className="form-title"> Registrate para ver fotos y videos de tus amigos </h2>
        <Form className="form" onSubmit={ handleSubmit }>
          
          <Form.Input 
            type='text' 
            name='name' 
            placeholder="Nombres y apellidos"
            onChange={ handleChange }
            value={ name }
            error={ errors.name && true }
          />

          <Form.Input 
            type='email' 
            name='email' 
            placeholder="Email"
            onChange={ handleChange }
            value={ email }
            error={ errors.email }
          />

          <Form.Input 
            type='text' 
            name='userName' 
            placeholder="Nombre de usuario"
            onChange={ handleChange }
            value={ userName }
            error={ errors.userName && true }
          />

          <Form.Input 
            type='password' 
            name='password' 
            placeholder="Contraseña"
            onChange={ handleChange }
            value={ password }
            error={ errors.password }
          />

          <Form.Input 
            type='password' 
            name='password2' 
            placeholder="Confirmar Contraseña"
            onChange={ handleChange }
            value={ password2 }
            error={ errors.password2 }
          />
          
          <Button className="btn-submit" type='submit' > Registrarse </Button>
        </Form>
      </div>

      <div className="change-form">
        <p> 
          ¿ Ya tienes una cuenta ?
          <Link to='/login'> <span> Log in </span> </Link>
        </p>
      </div>

    </Container>
  );
};
