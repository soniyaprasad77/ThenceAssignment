import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Registration from "./pages/registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
