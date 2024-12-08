import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Movies from './Pages/Movies.jsx';
import Series from './Pages/Series.jsx';
import Bookmarked from './Pages/Bookmarked.jsx';
import Feed from './Pages/Feed.jsx';
import VideoDetail from "./Components/VideoDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed />
      },
      {
        path:"video/:id",
        element: <VideoDetail />
      },
    ]
  },
  {
    path: "register",
    element:<Register />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "movies",
    element: <Movies />
  },
  {
    path: "series",
    element: <Series />
  },
  {
    path: "bookmarked",
    element: <Bookmarked />
  },
  {
    path: "feed",
    element:<Feed/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);
