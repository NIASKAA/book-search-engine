const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(input: SavedBook!): User
  removeBook(bookId: ID!): User
}
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
type Book {
    _id: ID!
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }
input SavedBook {
    authors: [String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String
  }
type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;