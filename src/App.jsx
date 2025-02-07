import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  const isLogged = useState(false);

  return !isLogged ? (
    <>Loading...</>
  ) : (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <h1>Login</h1>
            </>
          }
        />

        <Route path="/" element={""}>
          <Route index element={<>Home</>} />
          <Route path="users" element={<>Users</>} />
          <Route path="user/:id" element={<>User</>} />
          <Route path="products" element={<>Products</>} />
          <Route path="product/:id" element={<>Product</>} />
          <Route path="add-product" element={<>Add Product</>} />
        </Route>

        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </Router>
  );
}

export default App;
