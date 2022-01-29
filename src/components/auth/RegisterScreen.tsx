import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Container, Image } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import * as Yup from 'yup';

import { initFormRegister } from "../../helpers/initForms";
import { validFormRegister } from "../../helpers/validForm";
import { LOGIN, USER_REGISTER } from "../../graphql/mutation/usersMutation";
import instaclone from '../../assets/images/instaclone.png'
import '../../scss/auth/auth.scss';
import '../../scss/auth/authForm.scss';
import { helperRegister } from "../../helpers/helperAuth";
import { FormRegister } from "./FormRegister";

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

  return (
    
    <Container fluid className="auth">
      <Image src={ instaclone } />

      <div className="container-form">
    
        <h2 className="form-title"> Registrate para ver fotos y videos de tus amigos </h2>
        <FormRegister 
          formik={ formik }
        />
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
