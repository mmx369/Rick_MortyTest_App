import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { useChars } from '../../hooks/useChars'
import { ICharacter } from '../../models/ICharacters'
import { GET_INFO } from '../../query/get-info'
import { CharsCard } from '../Card/char-cards'
import { AppPagination } from '../Pagination/pagination'

export const CharList = () => {
  const [pagination, setPagination] = useState(1)
  const { data: characters, loading, error } = useChars(pagination)
  const {
    data: dataInfo,
    error: errorInfo,
    loading: loadingInfo,
  } = useQuery(GET_INFO)

  if (error || errorInfo) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 3 }}>
        <h1>Something went wrong try later...</h1>
      </Box>
    )
  }

  if (loading || loadingInfo) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 3 }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <AppPagination
        pagination={pagination}
        setPagination={setPagination}
        totalPages={dataInfo.getInfo?.pages}
      />
      <Grid container spacing={2}>
        {characters.map((char: ICharacter) => (
          <Grid item xs={12} md={6} lg={4} key={char.id}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CharsCard
                image={char.image}
                name={char.name}
                location={char.location.name}
                species={char.species}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <AppPagination
        pagination={pagination}
        setPagination={setPagination}
        totalPages={dataInfo.getInfo?.pages}
      />
    </>
  )
}
