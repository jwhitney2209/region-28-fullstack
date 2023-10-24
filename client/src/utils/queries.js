import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
query getMembers {
  members {
    _id
    firstName
    lastName
    email
    school {
      name
      phone
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