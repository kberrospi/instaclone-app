import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { InscaloneScreen } from "../components/Instaclone/InscaloneScreen";
import { PublicRoute } from './PublicRoute';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PrivateRoute } from "./PrivateRoute";



export const AppRouter = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState


  return (
    <Router>
        <Routes>
          <Route  path='/login' element={ 
              <PublicRoute uid={user?.uid} >
                <LoginScreen/> 
              </PublicRoute>
            } 
          />
          <Route  path='/register' element={ 
              <PublicRoute uid={user?.uid} >
                <RegisterScreen/> 
              </PublicRoute>
            } 
          />
          <Route  path='/*' 
            element={ 
              <PrivateRoute uid={user?.uid}>
                <InscaloneScreen />
              </PrivateRoute> 
            }  
          />
        </Routes>

    </Router>
  );
};
