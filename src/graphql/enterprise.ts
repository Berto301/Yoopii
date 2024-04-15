import gql from "graphql-tag";

export const GET_ENTERPRISE_BY_USER_ID = gql`
query getEnterpriseByUser($userId: String!) {
    getEnterpriseByUser(userId: $userId) {
      _id
      enterpiseName
    }
  }
`;
