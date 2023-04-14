import { RouteObject } from "react-router-dom";
import NotFound from "../pages/404";
import DetailsProduct from "../pages/DetailsProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import RootPage from "./RootPage";
import Cart from "../pages/Cart";
import Payment from "../pages/Payments";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const routes = () : RouteObject[] => [
    {
        path : "/",
        element : <RootPage /> ,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path: "/register",
                element : <Register />
            },
            {
                path: "/login",
                element : <Login />
            },
            {
                path: "/pages",
                element : <Home />
            },
            {
                path: "/products",
                element : <Product />
            },
            {
                path: "/products/:pid",
                element : <DetailsProduct />
            },
            {
                path: "/cart",
                element : <Cart />
            },
            {
                path: "/blog",
                element : <Home />
            },
            {
                path: "/shop",
                element : <Home />
            },        
            {
                path: "/contact",
                element : <Home />
            },
            {
                path: "/payment",
                element : <Payment />
            },
            {
                path : "*",
                element : <NotFound />
            }
        ]
    }
]