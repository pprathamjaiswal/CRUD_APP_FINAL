


import { createBrowserRouter, } from "react-router-dom";


import App from "./App";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import AddCategory from "./components/AddCategory";
import ShowCategory from "./components/ShowCategory";
import ShowProduct from "./components/ShowProduct";
import DeleteCategory from "./components/DeleteCategory";
import EditCategory from "./components/EditCategory";
import DeleteProduct from "./components/DeleteProduct";
import EditProduct from "./components/EditProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-category",
                element: <AddCategory />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            },
            {
                path: "/show-category",
                element: <ShowCategory />
            },
            {
                path: "/show-product",
                element: <ShowProduct />
            },
            {
                path: "/delete-cat/:myid",
                element: <DeleteCategory />
            },
            {
                path: "/edit-cat/:myid",
                element: <EditCategory />
            },
            {
                path: "/delete-pro/:myid",
                element: <DeleteProduct />
            },
            {
                path: "/edit-pro/:id",
                element: <EditProduct />
            }
        ]
    }
]);






export default router;



