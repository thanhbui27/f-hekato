import { RouteObject } from "react-router-dom";
import NotFound from "../pages/404";
import Home from "../pages/Home";
import Product from "../pages/Product";
import RootPage from "./RootPage";

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
                path: "/pages",
                element : <Home />
            },
            {
                path: "/products",
                element : <Product />
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
                path : "*",
                element : <NotFound />
            }
        ]
    }
]