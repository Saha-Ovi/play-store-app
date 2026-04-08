import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AppProvider from './context/AppProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppProvider>
     <RouterProvider router={router}></RouterProvider>
  </AppProvider>
  </StrictMode>,
)
