import {
  Route,
  Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LeftHomeSection } from "./components/left-home-section";
import { RightHomeSection } from "./components/right-home-section";
import Home from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "about",
  //   element: <div>About</div>,
  // },
]);

function App() {
  return (
    <Router>
      <Route path="/" element={Home} />
    </Router>
  );
}

export default App;
