import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client/core";
  import { onError } from "@apollo/client/link/error";
  import { useErrors } from "@/stores/errors";
  import { setContext } from "@apollo/client/link/context";
  
  // console.log({uri: import.meta.env.VITE_GRAPHQL_URL})
  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL,
    credentials: "include",
  });
  
  const errorHandler = onError(({ graphQLErrors }) => {
    
    // console.log({fields: graphQLErrors[0].extensions?.validation})
    if (graphQLErrors)
    useErrors().$state = {
        message: graphQLErrors[0].message,
        category: graphQLErrors[0].extensions.category,
        fields: graphQLErrors[0].extensions.validation ?? { input: {} },
      };
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem("token")
      },
    };
  });
  
  // Cache implementation
  const cache = new InMemoryCache();
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: authLink.concat(errorHandler.concat(httpLink)),
    cache,
  });
  
  export default apolloClient;