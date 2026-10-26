
import './App.css'
import ListCard from './components/ListCard'
import Navbar from './common/Navbar'
import Moredetail from './components/Moredetail'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <ListCard />
    },

    {
      path: '/moredetail',
      element: <Moredetail />
    }]
  }])

  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App
