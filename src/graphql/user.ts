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

export const GET_AUTH_INFO = gql`
query getAuthInfo($id: String!) {
  getAuthInfo(id: $id) {
      _id
      enabled
      name
      firstname
      type
      profesionnalName
      gender
      adress
      dateOfBirth
      email
      permissions
      NIF_STAT
      deliveryPlace
      deliveryDate
      language
      facebookSynchronisation
      googleSynchronisation
      phone
      CIN
      linkedin
      facebook
      whatsapp
      portfolio
      siteweb
      note
      role
    }
  }
`;

export const GET_USER_INFO = gql`
query getUserInfo($user: User!) {
  getUserInfo(user: $user) {
      _id
      enabled
      name
      firstname
      profesionnalName
      gender
      adress
      dateOfBirth
      email
      permissions
      NIF_STAT
      deliveryPlace
      deliveryDate
      language
      facebookSynchronisation
      googleSynchronisation
      linkedin
      facebook
      whatsapp
      portfolio
      siteweb
      note
      role
    }
  }
`;

export const MUTATE_UPDATE_USERS = gql`
  mutation updateUser($user: UpdateUsersInput!) {
    updateUser(updateUserInput: $user) {
      _id
      enabled
      name
      firstname
      type
      profesionnalName
      gender
      adress
      dateOfBirth
      email
      NIF_STAT
      deliveryPlace
      deliveryDate
      language
      facebookSynchronisation
      googleSynchronisation
      phone
      CIN
      linkedin
      facebook
      whatsapp
      portfolio
      siteweb
      note
      role
      permissions
    }
  }
`;
export const MUTATE_UPDATE_AUTH_PASSWORD = gql`
  mutation updatePassword($data: UpdatePasswordInput!) {
    updatePassword(updatePasswordInput: $data) {
      _id
    }
  }
`;

export const MUTATE_DELETE = gql`
  mutation delete($id: String!) {
    delete(id: $id){
      _id
    }
  }
`;


