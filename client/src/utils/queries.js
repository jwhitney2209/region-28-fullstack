import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
query getMembers {
  members {
    _id
    firstName
    lastName
    position
    email
    school {
      name
      phone
      extension
      address {
        street1
        street2
        city
        state
        zip
      }
    }
  }
}
`;