import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'

import App from './App.jsx'
import { Display } from './componants/Display.jsx'
import { Create } from './componants/Create.jsx'

const router = createBrowserRouter([
  {
    path:"*",
    element:<App/>
  }
])
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
