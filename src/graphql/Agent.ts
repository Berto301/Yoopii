import gql from "graphql-tag";
export const MUTATE_INSERT_AGENT = gql`
  mutation createAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgent: $createAgentInput) {
      _id
    }
  }
`;
export const GET_AGENTS = gql`
query getAgents($id: String!) {
  getAgents(id: $id) {
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