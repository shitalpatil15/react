import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Cart from "./components/Cart";

import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const About = lazy(() => import("./components/About"));

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {

  const [userName, setUserName] = useState("");

  //Authentication code here
  useEffect(() => {
    setUserName("Alex")
  }, [])

  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />

        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback="<h1>Loading...</h1>"><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);