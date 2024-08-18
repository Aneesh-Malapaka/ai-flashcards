import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/Landing";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><NavBar/> <LandingPage /></>
    },
    {
      path: "/home",
      element: <><NavBar/> <Home /></>
    },
    {
      path: "/auth",
      element: <><NavBar/> <Auth /></>
    },
    {
      path: "/user/:id",
      element: <><NavBar/> <Profile /></>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
