import { Link } from "react-router-dom";

import { Container, Image } from "semantic-ui-react";
import instaclone from '../../assets/images/instaclone.png'
import '../../scss/auth/auth.scss'

export const LoginScreen = () => {
  return (
    
    <Container fluid className="auth">
      <Image src={ instaclone } />

      <div className="container-form">
        <p> Formulario Login </p>
      </div>

      <div className="change-form">
        <p> 
          ¿ No tienes una cuenta ?
          <Link to='/register'> <span> Registrate </span> </Link>
        </p>
      </div>

    </Container>
  );
};
