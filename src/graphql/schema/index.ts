import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    getChars(page: Int): [Character!]!
    getInfo: Info
  }

  type Character {
    id: Int!
    name: String!
    status: String
    species: String
    type: String
    gender: String
    origin: Origin
    location: Location
    image: String
    episode: [String!]
    url: String
    created: String
  }

  type Origin {
    name: String
    url: String
  }

  type Location {
    name: String
    url: String
  }

  type Info {
    count: Int
    pages: Int
    next: String
    prev: String
  }
`

export default typeDefs
