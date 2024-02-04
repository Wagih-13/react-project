import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
