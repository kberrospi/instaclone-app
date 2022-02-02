import { Link } from 'react-router-dom';
import '../../scss/profile/profileNotFound.scss'

export const ProfileNotFound = () => {
  return (

    <div className='user-not-found'>
      <h2> Esta página no está disponible. </h2>
      <p> 
        Es posible que el enlace que seleccionaste esté roto o que se haya eliminado la página.  
        <Link to='/'> 
          Volver a Instagram. 
        </Link> 
      </p>
    </div>

  );
};
