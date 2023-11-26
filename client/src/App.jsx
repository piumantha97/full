import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard2 from './Components/Dashboard2/Dashboard2';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/recommendation',
    element: <div><Dashboard2 /></div>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
