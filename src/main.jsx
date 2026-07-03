import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './Pages/Menu.jsx'
import Gallery from './Pages/Gallery.jsx'
import RootLayout from './RootLayout.jsx'
import { GalleryProvider } from './context/GalleryContext.jsx'
import MenuProvider from './context/MenuContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/gallery',
        element: <Gallery />
      }
    ]
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/gallery',
    element: <Gallery />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuProvider>
      <GalleryProvider>
        <RouterProvider router={router} />
      </GalleryProvider>
    </MenuProvider>
  </StrictMode>,
)
