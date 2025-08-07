import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/register/register.jsx';
import Login from './pages/login/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },

]);

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <RouterProvider router={router} />
  //</StrictMode>
)
