import gql from "graphql-tag";
export const MUTATE_LOGIN = gql`
mutation login($user: LoginUserInput!) {
    login(user: $user) {
      user {
        enabled
        personnalInfo {
          name
          firstname
          profesionnalName
          gender
          adress
          dateOfBirth
        }
        email
        permissions
        licence {
          NIF_STAT
          deliveryPlace
          deleiveryDate
        }
        accountSettings {
          language
          facebookSynchronisation
          googleSynchronisation
        }
      }
      token
    }
  }
`;
