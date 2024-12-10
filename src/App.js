
import './App.css';
import Header from './Components/Header';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import 'bootstrap-icons/font/bootstrap-icons.json';
//import 'remixicon/fonts/remixicon.glyph.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from './Components/Sidebar/SideBar';
import Login from './Components/LoginExtension/login/Login';
import Signup from './Components/LoginExtension/signup/Signup';


import Main from './Main/Main';
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element:     <>
      <Header/>
      <SideBar/>
      <Main/>
      
      
      
      </>,

    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
