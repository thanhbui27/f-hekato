import { Navigate, RouteObject } from "react-router-dom";
import NotFound from "../pages/404";
import DetailsProduct from "../pages/DetailsProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import RootPage from "./RootPage";
import Cart from "../pages/Cart";
import Payment from "../pages/Payments";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RootAdminPage from "./RootAdminPage";
import DashboardAppPage from "src/admin/pages/DashboardAppPage";
import UserPage from "src/admin/pages/UserPage";
import ProductsPage from "src/admin/pages/ProductsPage";
import BlogPage from "src/admin/pages/BlogPage";

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
    },
    {
        path : "/admin/dashboard",
        element : <RootAdminPage /> ,
        children: [
            { element: <Navigate to="/dashboard/app" />, index: true },
            { path: 'app', element: <DashboardAppPage /> },
            { path: 'user', element: <UserPage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'blog', element: <BlogPage /> },
          ],
    
    }
]