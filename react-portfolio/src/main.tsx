import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import {Page} from './Page.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/**
 * Main handles all of the routes in the website
 */
const router= createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/education", element: <Page/>},
  {path: "/workexperience", element: <Page/>},
  {path: "/projects", element: <Page/>},
  {path: "/skills", element: <Page/>},
  {path: "/extracurriculars", element: <Page/>}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
