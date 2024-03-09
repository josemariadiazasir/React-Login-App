import React from 'react'
import { Box, Theme, Toolbar, Typography } from '@mui/material'
import logo from '../../assets/react.svg'
import { useNavigate } from 'react-router'

interface IHeaderProps {
  theme: Theme
}

const Header = (props: IHeaderProps) => {
  const navigate = useNavigate()

  return (
    <Box
      bgcolor={props.theme.palette.background.paper}
      role="HeaderComponent"
      display={'block'}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={'90px'}
        maxWidth={'lg'}
        marginX="auto"
      >
        <Box
          component="img"
          sx={{
            maxHeight: '50%',
            marginLeft: '1%',
            display: 'block',
            cursor: 'pointer',
          }}
          src={logo}
          onClick={() => navigate('')}
          alt="M6toll Logo"
        />
        {/* {environment && environment.ENVIRONMENT && (
          <Typography color="red" variant="h5" sx={{ fontWeight: "bold", userSelect: "none" }}>
            {environment.ENVIRONMENT.toUpperCase()}
          </Typography>
        )} */}
      </Box>
    </Box>
  )
}

export default Header
