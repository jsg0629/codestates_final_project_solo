/* eslint-disable react/function-component-definition */
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading({ heightValue }: { heightValue: undefined | string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: heightValue || 'inherit',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
