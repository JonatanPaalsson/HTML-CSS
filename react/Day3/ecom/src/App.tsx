import BasketFooter from "./components/BasketFooter/BasketFooter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <BasketFooter />
    </div>
  );
}

export default App;
