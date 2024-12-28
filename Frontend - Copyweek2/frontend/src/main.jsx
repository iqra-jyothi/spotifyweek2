import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './router/App.jsx'
import spotifystore from './store/index.js';
import {Provider} from 'react-redux';
import {Navigate, RouterProvider,createBrowserRouter} from "react-router-dom"
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from './router/Home.jsx';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './component/PrivateRoute.jsx';
import { AuthProvider } from './AuthContext.jsx';
import Podcast from './component/Podcast.jsx';
import Music from './component/Music.jsx';
import MusicSearch from './component/MusicSearch.jsx';
// import { createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {path:"/",element:<Navigate to="/login"></Navigate>},
    {path:"/login",element:<Login></Login>},
    {path:"/signup",element:<Signup></Signup>},

    {path:"/home",element:
      <PrivateRoute>
<Home></Home>
      </PrivateRoute>
    },
    {
      path:"/podcast",element:<Podcast></Podcast>
    },
    {
      path:"/All",element:<Home></Home>
    },
    {
      path:"/music",element:<Music></Music>
    },
    {
      path:"/musicsearch",element:<MusicSearch></MusicSearch>
    },
  ]
}
]
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={spotifystore}>
    <AuthProvider>
    <RouterProvider router
   ={router}>
    <App />
    </RouterProvider>
    </AuthProvider>
    </Provider>
   
  // </StrictMode>,
)
