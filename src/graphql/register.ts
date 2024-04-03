import gql from "graphql-tag";
export const MUTATE_INSERT_USERS = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: {
        enabled: true
        name: $name
        firstname: "-"
        profesionnalName: $name
        gender: "male"
        adress: "123 Main St"
        dateOfBirth: "2000-01-01"
        birthOfDate: "2021-02-01"
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
        NIF_STAT: "0000", 
        deliveryPlace: "-",
        deliveryDate: "1990-01-01" 
        language: "en"
        facebookSynchronisation: "-"
        googleSynchronisation: "-"
      }
    ) {
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
