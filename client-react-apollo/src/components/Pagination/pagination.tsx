import { Pagination } from '@mui/material'
import Box from '@mui/material/Box'

type TProps = {
  pagination: number
  setPagination: (p: number) => void
  totalPages: number
}

export const AppPagination = ({
  pagination,
  setPagination,
  totalPages,
}: TProps) => {
  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPagination(page)
    window.scroll(0, 0)
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        margin: '20px 0px',
      }}
    >
      <Pagination
        count={totalPages}
        onChange={handlePaginationChange}
        page={pagination}
      />
    </Box>
  )
}
