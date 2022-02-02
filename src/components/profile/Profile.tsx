import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_USER } from "../../graphql/queries/userQueries";
import ImageNotFound from '../../assets/images/avatar.png'
import { Grid, GridColumn, Image } from "semantic-ui-react";
import '../../scss/profile/profile.scss'
import { ProfileNotFound } from "./ProfileNotFound";
import { ModalBase } from "../ui/modal/ModalBase";
import { useState } from "react";


export const Profile = () => {

  const { userName } = useParams();
  const [open, setOpen] = useState(false);
  
  const { data, error, loading } = useQuery(GET_USER, {
    variables:{
      userName
    }
  });

  if( loading ) return null;
  if( error ) return <ProfileNotFound />
  const { getUser } = data
  console.log( getUser );
  const { name, siteWeb, description } = getUser

  return (

    <>
      <Grid className="profile">
        <GridColumn width={5} className="profile__left">
          <Image src={ ImageNotFound } avatar />
        </GridColumn>
        <GridColumn width={11} className="profile__right">
          <div> Header Profile </div>
          <div> Followers </div>
          <div className="other" >  
            <p className="name" > { name } </p>
            {
              siteWeb &&
              <a href={siteWeb} className="siteWeb" target='_blank' >
                { siteWeb }
              </a>
            }
            {
              description &&
              <p className="description" > { description } </p>
            }
          </div>
        </GridColumn>
      </Grid>
      <ModalBase 
        open={ open } 
        setOpen={ setOpen } 
        title='Cambiar foto del perfil' 
        size="mini" 
      > 
        <p> Opcion 1 </p>
        <p> Opcion 2 </p>
        <p> Opcion 3 </p>

      </ModalBase>
    </>
  );
};
