import { gql } from '@apollo/client'

export const GET_INFO = gql`
  query {
    getInfo {
      pages
      next
      count
      prev
    }
  }
`
