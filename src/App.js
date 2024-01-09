import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import CertRequestForm from "./pages/CertRequest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={ <Home/> } />
        <Route path="request" element={ <CertRequestForm/> } />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App