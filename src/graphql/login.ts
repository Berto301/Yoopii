import gql from "graphql-tag";

export const MUTATE_LOGIN = gql`
  mutation login($user: LoginUserInput!) {
    login(user: $user) {
      user {
        _id
        enabled
        name
        type
        firstname
        profesionnalName
        gender
        adress
        birthOfDate
        email
        permissions
        NIF_STAT
        deliveryPlace
        deliveryDate
        language
        facebookSynchronisation
        googleSynchronisation
      }
      token
    }
  }
`;
