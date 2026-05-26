import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create from './componants/Create.jsx'
import Display from './componants/Display.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Create />
    },
    {
      path: "/display",
      element: <Display />
    },
  ]

}])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
