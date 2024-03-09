import React from 'react'
import { Box } from '@mui/material'

interface IMainViewProps {
  children?: React.ReactNode
}

const MainView = (props: IMainViewProps) => {
  return (
    <Box flexGrow={1} width={'100%'}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default MainView
