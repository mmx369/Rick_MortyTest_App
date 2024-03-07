import axios from 'axios'
import { ICharacter } from '../../models/ICharacter'

interface ICharactersResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: ICharacter[]
}

const resolvers = {
  Query: {
    getInfo: async () => {
      try {
        const response = await axios.get<ICharactersResponse>(
          'https://rickandmortyapi.com/api/character'
        )
        return response.data.info
      } catch (error) {}
    },
    getChars: async (_: unknown, { page }: { page: number }) => {
      try {
        const characters = await axios.get<ICharactersResponse>(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        )
        return characters.data.results.map(
          ({
            id,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            image,
            episode,
            url,
            created,
          }) => ({
            id,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            image,
            episode,
            url,
            created,
          })
        )
      } catch (error) {
        throw error
      }
    },
  },
}

export default resolvers
