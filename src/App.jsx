import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import { createBrowserRouter, RouterProvider } from "react-router";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Home />,
    },
    {
      path: "/destination",
      element: <Destination />,
    },
    {
      path: "/crew",
      element: <Crew />,
    },
    {
      path: "/technology",
      element: <Technology />,
    },
  ]);

  return <RouterProvider router={router} />;
}
