import gql from "graphql-tag";

export const GET_ENTERPRISE_BY_USER_ID = gql`
query getEnterpriseByUser($userId: String!) {
    getEnterpriseByUser(userId: $userId) {
      _id
      enterpiseName
    }
  }
`;

export const GET_ENTERPRISE_INFO = gql`
query getEnterpriseInfo($id: String!) {
  getEnterpriseInfo(id: $id) {
      _id
      enterpiseName
      enterpiseAdress
      enterpisePhone
      enterpiseEmail
      enterpiseNIF_STAT
      enterpiseDeliveryPlace
    }
  }
`;