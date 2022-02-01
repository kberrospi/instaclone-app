import { useContext } from "react";
import { Container } from "semantic-ui-react";
import { AuthContext } from '../../context/AuthContext';
import { types } from '../../context/types';
import { Header } from "../ui/header/Header";


export const InstacloneScreen = () => {

  const { dispatch } = useContext( AuthContext );

  const handleLogout = () => {
    dispatch({ type: types.logout });
    localStorage.removeItem('token')
  }


  return (

    <>
      <Header />
      <Container>
        <button onClick={ handleLogout } > Logout </button>
      </Container>
    
    </>


  );
};
