import { gql } from '@apollo/client'

export const GET_CHARS = gql`
  query ($page: Int) {
    getChars(page: $page) {
      id
      name
      image
      species
      location {
        name
      }
    }
  }
`
