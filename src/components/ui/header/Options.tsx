import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { HomeIconSelected } from "../../../assets/svg/HomeIconSelected";
import { IconAdd } from "../../../assets/svg/IconAdd";
import imageNotFound from '../../../assets/images/avatar.png';
import '../../../scss/ui/header-options.scss'
import { useContext } from "react";
import { AuthContext } from '../../../context/AuthContext';
import { HomeIcon } from "../../../assets/svg/HomeIcon";
import { HelperLink } from "../../../helpers/HelperLink";


export const Options = () => {

  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { match } = HelperLink('/');
  const { match: matchUser } = HelperLink(`/${user?.userName}`);

  return (
    <>
      <div className="header-options">
        <Link to='/'>
          { match 
            ? <HomeIconSelected />
            : <HomeIcon />
          }
        </Link>
        <Link to='/'>
          <IconAdd />
        </Link>
        <Link to={`/${user?.userName}`} >
          <Image 
            src={ imageNotFound } 
            avatar 
            style={ matchUser && { border:'1px solid black' }} 
          />
        </Link>
      </div>
    </>
  );
};
