import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { InscaloneScreen } from "../components/Instaclone/InscaloneScreen";


export const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path='/login' element={ <LoginScreen /> } />
          <Route path='/register' element={ <RegisterScreen /> } />
          <Route path='/*' element={ <InscaloneScreen /> } />
        </Routes>

    </Router>
  );
};
