import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import App from './App'
import './index.css'
import router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
