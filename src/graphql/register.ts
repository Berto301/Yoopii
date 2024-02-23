import gql from "graphql-tag";
export const MUTATE_INSERT_USERS = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: {
        enabled: true
        personnalInfo: {
          name: $name
          firstname: "-"
          profesionnalName: $name
          gender: "male"
          adress: "123 Main St"
          dateOfBirth: "1990-01-01"
        }
        email: $email
        password: $password
        permissions: [
          "dashboard"
          "chat"
          "property"
          "terrain"
          "reports"
          "settings"
        ]
        licence: { NIF_STAT: "0000", deliveryPlace: "-", deleiveryDate: "1990-01-01" }
        accountSettings: {
          language: "en"
          facebookSynchronisation: "-"
          googleSynchronisation: "-"
        }
      }
    ) {
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
