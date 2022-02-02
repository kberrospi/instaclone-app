import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { InstacloneScreen } from "../components/home/InstacloneScreen";
import { PublicRoute } from './PublicRoute';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PrivateRoute } from "./PrivateRoute";
import { Profile } from "../components/profile/Profile";
import { Container } from "semantic-ui-react";



export const AppRouter = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState


  return (
    <Router>
        <Routes>
          <Route  path='/login' element={ 
              <PublicRoute uid={user?.uid}>
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
          <Route path='/:userName' 
            element={ 
              <PrivateRoute uid={user?.uid}>
                <Profile />
              </PrivateRoute> 
            }  
          />
          <Route path='/*' 
            element={ 
              <PrivateRoute uid={user?.uid}>
                <InstacloneScreen />
              </PrivateRoute> 
            }  
          />
        </Routes>
    </Router>
  );
};
