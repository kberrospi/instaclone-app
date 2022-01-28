import { gql } from '@apollo/client';


export const USER_REGISTER = gql`
  mutation register( $input: UserInput ){
    register( input: $input ){
      id
      name
      userName
      email
      createAt
    }
  }
`;

export const LOGIN = gql`
  mutation login( $input: LoginInput ){
    login( input: $input ){
      uid
      name
      token
    }
  }
`

export const RENEW_JWT = gql`
  mutation revalidarToken( $input: LoginInput ){
    revalidarToken( input: $input ){
      uid
      name
      token
    }
  }
`