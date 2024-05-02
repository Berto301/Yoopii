import gql from "graphql-tag";
export const MUTATE_INSERT_CONFIGURATION = gql`
  mutation createConfiguration($data: CreateConfigurationDto!) {
    createConfiguration(createConfiguration: $data) {
      _id
    }
  }
`;

export const MUTATE_UPDATE_CONFIGURATION = gql`
  mutation updateConfiguration($data: updateConfigurationDto!) {
    updateConfiguration(updateConfiguration: $data) {
      _id
    }
  }
`;

export const GET_CONFIGURATION_INFO = gql`
query getConfigById($id: String!) {
  getConfigById(id: $id) {
      _id
      format
      devise
      taux
      timezone
      userId
    }
  }
`;