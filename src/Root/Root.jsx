import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Dashboard from "../Pages/Dashboard";
import Incidents from "../Pages/Incidents";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/incidents",
          element: <Incidents/> ,
        }
      ]
}  ]);