import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        username
        _id
      }
      token
    }
  }
`;

export const ADD_MEMBER = gql`
mutation AddMember($firstName: String!, $lastName: String!, $email: String!, $school: SchoolInput, $position: String!) {
  addMember(firstName: $firstName, lastName: $lastName, email: $email, school: $school, position: $position) {
    _id
    firstName
    lastName
    email
    position
    createdAt
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
