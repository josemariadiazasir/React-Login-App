import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { getDesignTokens } from './themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './auth/AuthProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/Signup'
import ProtectedRoute from './routes/ProtectedRoute'
import Dashboard from './routes/Dashboard'

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
  ])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
