import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Dashboard from "../Pages/Dashboard";
import Incidents from "../Pages/Incidents";
import ProgressPage from "../Pages/ProgressPage";
import NewIncident from "../Pages/NewIncident";
import IncidentForm from "../Pages/IncidentForm";
import IncidentLayout from "../MainLayout/IncidentLayout";

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
        element: <IncidentLayout />,
        children: [
          {
index: true,
            element: <Incidents />,
          },
          {
            path: "progress-page",  
            element: <ProgressPage />,
          },
          {
            path: "new-incident",  
            element: <NewIncident />,
          },
          {
            path: "incident-form",
            element: <IncidentForm />,
          },
        ],
      },
    ],
  },
]);