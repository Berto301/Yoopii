import gql from "graphql-tag";

export const GET_USER_ID = gql`
query getUser($userId: String!) {
    getUser(userId: $userId) {
      _id
      enterprise{
        _id 
      }
    }
  }
`;
