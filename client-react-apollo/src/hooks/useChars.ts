import { useQuery } from '@apollo/client'
import { ICharacter } from '../models/ICharacters'
import { GET_CHARS } from '../query/get-chars'

export const useChars = (page: number) => {
  const { data, loading, error } = useQuery(GET_CHARS, {
    variables: {
      page,
    },
  })
  if (loading || error) return { error, loading, data: [] as ICharacter[] }
  const characters = data.getChars as ICharacter[]
  return { error, loading, data: characters }
}
