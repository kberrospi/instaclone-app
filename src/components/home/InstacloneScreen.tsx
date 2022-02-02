import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import { types } from '../../context/types';


export const InstacloneScreen = () => {

  const { dispatch } = useContext( AuthContext );

  const handleLogout = () => {
    dispatch({ type: types.logout });
    localStorage.removeItem('token')
  }


  return (

    <>
      <button onClick={ handleLogout } > Logout </button>
    </>


  );
};
