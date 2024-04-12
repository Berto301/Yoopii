import gql from "graphql-tag";
export const MUTATE_INSERT_USERS = gql`
  mutation createUser($name: String!, $email: String!, $password: String!, $type: String!) {
    createUser(
      createUserInput: {
        enabled: true
        name: $name
        firstname: "-"
        profesionnalName: $name
        type: $type
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

export const MUTATE_INSERT_USERS_AND_ENTERPRISE = gql`
  mutation createUserAndEnterprise($name: String!, $email: String!, $password: String!, $type: String!,$enterpriseEmail:String!,$enterpriseName:String! ) {
    createUserAndEnterprise(
      createUserInput: {
        enabled: true
        name: $name
        firstname: "-"
        profesionnalName: $name
        type: $type
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
      createEnterpiseInput: {
        enterpiseName: $enterpriseName
        enterpiseEmail: $enterpriseEmail
        enterpiseAdress: "", 
        enterpisePhone: "-",
        enterpiseNIF_STAT: "0000", 
        enterpiseDeliveryDate: "1990-01-01" 
        enterpiseDeliveryPlace: "-"
      }
    ) {
      user {
        enterprise {
          _id
          enterpiseName
          enterpiseEmail
        }
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
