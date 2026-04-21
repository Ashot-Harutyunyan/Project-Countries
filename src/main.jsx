import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ThemeContext from './ctx/ThemeContext.jsx'
import Countries from './components/Countries/Countries.jsx'
import GlobePage from './components/GlobePage/GlobePage.jsx'
import SingleCountry from './components/SingleCountry/SingleCountry.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                errorElement: <ErrorBoundary/>,
                children: [
                    { index: true,  element: <Countries /> },
                    { path: '/GlobePage',  element: <GlobePage /> },
                    { path: '/Country/:code',  element: <SingleCountry /> },
                ]
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeContext>
          <RouterProvider router={router}/>
      </ThemeContext>
  </StrictMode>,
)
