import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import MdShop from './mdshop.jsx'
// import App from './App.jsx'
// import Callback_App from './Callback_App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* { <App /> } */}
      {/* <Callback_App/> */}
      <MdShop />
  </StrictMode>,
)
