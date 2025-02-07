import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import Login from "./pages/login";
import Home from "./pages/home";
import User from "./pages/user";
import Users from "./pages/users";
import Products from "./pages/products";
import Product from "./pages/product";
import AddProduct from "./pages/addProduct";
import DashboardHome from "./components/dashboard/dashboardHome";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <>Loading...</>
  ) : (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path=""
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>

        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </Router>
  );
}

export default App;
