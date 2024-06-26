import gql from "graphql-tag";
export const MUTATE_INSERT_USERS = gql`
  mutation createUser($name: String!, $email: String!, $password: String!, $type: String!) {
    createUser(
      createUserInput: {
        enabled: true
        name: $name
        firstname: ""
        profesionnalName: $name
        type: $type
        gender: "man"
        adress: ""
        dateOfBirth: "2005-01-01"
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
        phone:""
        CIN:""
        NIF_STAT: "", 
        deliveryPlace: "",
        deliveryDate: "2005-01-01" 
        language: "en"
        facebookSynchronisation: ""
        googleSynchronisation:""
        linkedin:""
        facebook:""
        whatsapp:""
        portfolio:""
        siteweb:""
        note:""
        role: "Super Admin"
      }
    ) {
      user {
        
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
        firstname: ""
        profesionnalName: $name
        type: $type
        gender: "man"
        adress: ""
        dateOfBirth: "2005-01-01"
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
        NIF_STAT: "", 
        deliveryPlace: "",
        deliveryDate: "2005-01-01" 
        language: "en"
        facebookSynchronisation: ""
        googleSynchronisation: ""
        phone:""
        CIN:""
        linkedin:""
        facebook:""
        whatsapp:""
        portfolio:""
        siteweb:""
        note:""
        role: "Super Admin"
      }
      createEnterpiseInput: {
        enterpiseName: $enterpriseName
        enterpiseEmail: $enterpriseEmail
        enterpiseAdress: "", 
        enterpisePhone: "",
        enterpiseNIF_STAT: "", 
        enterpiseDeliveryDate: "2005-01-01" 
        enterpiseDeliveryPlace: ""
        linkedin:""
        facebook:""
        whatsapp:""
        services:[
          "vente",
          "location"
        ]
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
      token
    }
  }
`;
