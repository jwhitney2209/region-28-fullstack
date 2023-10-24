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
mutation addMember($firstName: String!, $lastName: String!, $email: String!, $school: SchoolInput) {
  addMember(firstName: $firstName, lastName: $lastName, email: $email, school: $school) {
    firstName
    lastName
    email
    _id
    createdAt
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
