import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'
import Footer from './component/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Manager/></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },

  ])

  return (
    <>
      
      
      
      <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
        <RouterProvider router={router} />

      </div>
      <Footer />
    </>
  )
}

export default App
