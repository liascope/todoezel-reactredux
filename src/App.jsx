import './index.css'
import {RouterProvider, } from 'react-router-dom'
import { router } from './components/app/router'



function App() {
  return (
 <RouterProvider router={router}></RouterProvider>
  )
}

export default App
