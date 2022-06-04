/* eslint-disable react/function-component-definition */
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
