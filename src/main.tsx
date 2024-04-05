import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages

import Home from './routes/Home';
import Menu from './routes/Menu';
import Drink from './routes/Drink.tsx';
import DrinkNotAlcohol from './routes/DrinkNotAlcohol.tsx';
import Portions from './routes/Portions.tsx';
import Snack from './routes/Snack.tsx';
import Soup from './routes/Soup.tsx';

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
        path: "menu",
        element: <Menu />
      },
      {
        path: "drinks",
        element: <Drink />
      },
      {
        path: "drinks-not-alcohol",
        element: <DrinkNotAlcohol />
      },
      {
        path: "portions",
        element: <Portions />
      },
      {
        path: "portions",
        element: <Portions />
      },
      {
        path: "snacks",
        element: <Snack />
      },
      {
        path: "soups",
        element: <Soup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
