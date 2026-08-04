import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componants/Home.jsx'
import Shop from './componants/Shop.jsx'
import Accounts from './componants/Accounts.jsx'
import Compare from './componants/Compare.jsx'
import { Auth } from './componants/Auth.jsx'
import { Wishlist } from './componants/Wishlist.jsx'
import { Cart } from './componants/Cart.jsx'
import { Checkout } from './componants/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/accounts",
        element: <Accounts />
      },
      {
        path: "/compare",
        element: <Compare />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
