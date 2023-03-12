import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
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
                element : <Home />
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
        ]
    }
]