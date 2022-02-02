import { Navigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Header } from '../components/ui/header/Header';

export const PrivateRoute = ({ children, uid }:any) => {
  return !!uid
    ? ( 
      <> 
        <Header/> 
        <Container> 
          {children} 
        </Container>  
      </> 
    )
    : <Navigate to='/login' />
};
