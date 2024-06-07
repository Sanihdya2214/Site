import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home/'
import About from './components/About/About/'
import Contact from './components/Contact/Contact.jsx'
import  Github ,{githubInfoLoader} from './components/Github/Github.jsx'

   /*const router=createBrowserRouter([
      {
    path :"/",
    element:<Layout/>,
    Children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
       
  }
   ])
  */

   const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path="" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route loader={githubInfoLoader} path="github" element={<Github/>}></Route>

      </Route>
    )
   )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
