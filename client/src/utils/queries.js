import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
query getMembers {
  members {
    _id
    createdAt
    firstName
    lastName
    email
    position
    school {
      name
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