import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import CardDetails from "../pages/CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch('/data.json'),
                element: <Home></Home >
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/card/:id",
                element: <CardDetails></CardDetails>,
                loader: ()=>fetch('/data.json'),
            }
        ],
    }
]);

export default myCreatedRoute;