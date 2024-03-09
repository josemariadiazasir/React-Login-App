import { useMemo, useState } from 'react'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { getDesignTokens } from './themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './auth/AuthProvider'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
import ProtectedRoute from './routes/ProtectedRoute'
import Dashboard from './routes/Dashboard'
import Header from './components/Layout/Header'
import MainView from './components/Layout/MainView'
import Navbar from './components/Layout/Navbar'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  const theme = useMemo(() => {
    return createTheme(getDesignTokens('light'))
  }, [])

  const router = createBrowserRouter([
    {
      element: (
        <>
          <Header theme={theme} />
          <Navbar />
          <MainView>
            <Outlet />
          </MainView>
        </>
      ),
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/',
          element: <ProtectedRoute />,
          children: [
            {
              path: '/dashboard',
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <AuthProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
              }}
            >
              <RouterProvider router={router} />
            </Box>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
