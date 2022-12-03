import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dry from './pages/Dry';
import NotDry from './pages/NotDry';
// import Div100vh from 'react-div-100vh';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dry",
    element: <Dry/>
  },
  {
    path:"/notdry",
    element: <NotDry/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Div100vh>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // </Div100vh>
)
