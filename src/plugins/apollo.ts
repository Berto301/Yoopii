import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client/core";
  import { onError } from "@apollo/client/link/error";
  import { useErrorsStore } from "@/stores/errors";
  import { setContext } from "@apollo/client/link/context";
  
  console.log({uri: import.meta.env.VITE_GRAPHQL_URL})
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: import.meta.env.VITE_GRAPHQL_URL,
    credentials: "include",
  });
  
  const errorHandler = onError(({ graphQLErrors }) => {
    if (graphQLErrors)
      useErrorsStore().$state = {
        message: graphQLErrors[0].message,
        category: graphQLErrors[0].extensions.category,
        fields: graphQLErrors[0].extensions.validation ?? { input: {} },
      };
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        withCredentials:false,
        authorization: localStorage.getItem("token"),
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