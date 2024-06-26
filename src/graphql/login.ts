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
