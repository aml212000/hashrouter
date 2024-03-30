import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/home.jsx'
import Contacts from './routes/contacts.jsx'
import About from './routes/about.jsx'


const router = createHashRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/contacts',
    element: <Contacts />
  },
  {
    path:'/about',
    element: <About />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
