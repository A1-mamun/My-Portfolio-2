import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default routes;
