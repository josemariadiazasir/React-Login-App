import { useTranslation } from 'react-i18next'
import { Box, useTheme } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * The main navigation bar for the application.
 * @returns {JSX.Element} The navigation bar.
 */
const Navbar = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Box
      sx={{
        background: `${theme.palette.primary.light}`,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        maxWidth={'lg'}
        marginY="auto"
        marginX="auto"
        width="100%"
        height={theme.spacing(6)}
      >
        {/* <HamburgerMenu items={isLoggedIn ? loggedItems : notLoggedItems} /> */}
        {/* <Button
          ariaLabel={isLoggedIn ? "logout" : "login"}
          customStyle="text"
          sx={{ ...buttonStyle, px: 0 }}
          text={isLoggedIn ? t("buttons.logout") : t("buttons.login")}
          EndIcon={isLoggedIn ? LogoutIcon : LoginIcon}
          onClick={() => onButtonClickHandler()}
        /> */}
      </Box>
    </Box>
  )
}

const buttonStyle = {
  color: 'primary.contrastText',
  p: 1,
}

export default Navbar
