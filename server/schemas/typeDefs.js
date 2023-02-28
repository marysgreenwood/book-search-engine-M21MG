const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input BookInput {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
