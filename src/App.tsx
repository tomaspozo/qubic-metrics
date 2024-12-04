import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home";
import Layout from "@/pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
