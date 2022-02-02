import { gql } from "@apollo/client";


export const GET_USER = gql`
  query getUSer($id: ID, $userName: String){
    getUser( id: $id, userName: $userName ){
      id
      name
      userName
      email
      siteWeb
      description
      avatar
    }
  }
`;