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