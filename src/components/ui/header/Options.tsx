import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { HomeIconSelected } from "../../../assets/svg/HomeIconSelected";
import { IconAdd } from "../../../assets/svg/IconAdd";
import imageNotFound from '../../../assets/images/avatar.png';
import '../../../scss/ui/header-options.scss'
import { useContext } from "react";
import { AuthContext } from '../../../context/AuthContext';



export const Options = () => {

  const { authState } = useContext(AuthContext);
  const { user } = authState
  
  return (
    <>
      <div className="header-options">
        <Link to='/'>
          <HomeIconSelected />
        </Link>
        <Link to='/'>
          <IconAdd />
        </Link>
        <Link to={`/${user?.userName}`} >
          <Image src={ imageNotFound } avatar />
        </Link>
      </div>
    </>
  );
};
