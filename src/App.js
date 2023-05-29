import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import RootLayout from "./components/RootLayout";
function App() {
  const rotuer = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={rotuer} />
    </div>
  );
}

export default App;
