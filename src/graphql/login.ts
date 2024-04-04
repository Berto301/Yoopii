import gql from "graphql-tag";
export const MUTATE_LOGIN = gql`
mutation login($user: LoginUserInput!) {
    login(user: $user) {
      user {
        enabled
        name
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
