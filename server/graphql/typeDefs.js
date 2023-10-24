import { gql } from "graphql-tag";

const typeDefs = gql`
  type Member {
    _id: ID
    firstName: String
    lastName: String
    position: String
    email: String
    school: School
    createdAt: String
  }

  type User {
    _id: ID
    username: String
    password: String
  }

  type Address {
    street1: String
    street2: String
    city: String
    state: String
    zip: String
  }

  type School {
    name: String
    phone: String
    extension: String
    address: Address
  }

  input AddressInput {
    street1: String
    street2: String
    city: String
    state: String
    zip: String
  }

  input SchoolInput {
    name: String
    phone: String
    extension: String
    address: AddressInput
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    members: [Member]
    member(_id: ID!): Member
    me: User
  }

  type Mutation {
    addMember(
      firstName: String!
      lastName: String!
      position: String!
      email: String!
      school: SchoolInput
    ): Member
    updateMember(
      _id: ID!
      firstName: String
      lastName: String
      position: String
      email: String
      school: SchoolInput
    ): Member
    deleteMember(_id: ID!): Member
    login(username: String!, password: String!): Auth
    register(username: String!, password: String!, confirmPassword: String!): Auth
  }
`;

export default typeDefs;
