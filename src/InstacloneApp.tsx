import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import { AppRouter } from "./router/AppRouter";


export const InstacloneApp = () => {
  return(
    <ApolloProvider client={ client } >
      <AppRouter />
    </ApolloProvider>
  )
};
