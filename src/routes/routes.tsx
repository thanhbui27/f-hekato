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
import OrderCompleted from "src/pages/orderCompleted";
import OrderPage from "src/admin/pages/OrderPage";
import UUserPage from "src/pages/User";
import MyAccount from "src/pages/User/components/MyAccount";
import CartUser from "src/pages/User/components/Cart";
import OrderUser from "src/pages/User/components/Order";

export const routes = (): RouteObject[] => [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path : "/user",
        element: <UUserPage />,
        children : [
          { element: <Navigate to="/user/dashboard" />, index: true },
          { path: "dashboard", element:<h1>page</h1> },
          { path: "my-account", element: <MyAccount /> },
          { path: "cart", element: <CartUser /> },
          { path: "my-order", element: <OrderUser /> },
          { path: "my-blog", element:<h1>page</h1> },
          { path: "help-desk", element:<h1>page</h1> },
          { path: "settings", element:<h1>page</h1> },
        ]
      },
      {
        path: "/pages",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:pid",
        element: <DetailsProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/orderCompleted",
        element: <OrderCompleted />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <RootAdminPage />,
    children: [
      { element: <Navigate to="/dashboard/statistics" />, index: true },
      { path: "statistics", element: <DashboardAppPage /> },
      { path: "user", element: <UserPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "order", element: <OrderPage /> },
      { path: "blog", element: <BlogPage /> },
    ],
  },
];
