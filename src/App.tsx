import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home";
import Layout from "@/pages/layout";
import OpenSource from "@/pages/open-source";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/open-source",
        element: <OpenSource />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
