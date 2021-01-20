const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    username: String!
    password: String!
    email: String!
  }

  input UserInput {
    username: String!
    password: String!
    email: String!
  }

  type Query {
    sayHi: String!
    getUsers: [User]!
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;
