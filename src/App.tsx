import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import CreateAccount from "./routes/create-account";
import Login from "./routes/login";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import reset from 'styled-reset'; 
import { auth } from '../src/firebase';

const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children :[
      {
      path: "",
      element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
      
    ]
  },
  {
    path: "/login",
    element:<Login />
  },
  {path: "/create-account", element:<CreateAccount />}
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body{
  background-color: black;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvatica Neue',
  sans-serif;
}
`;


function App() {
  const[isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setTimeout(() => setLoading(false), 2000) 
  };
  useEffect(() => {
    init();
  }, []);
  return(
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} /> }
    </>
  );
}

export default App;
