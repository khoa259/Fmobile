import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ProductsType } from "./types/ProductsType";
import { getAll } from "./api/products";
import ProductsPage from "./pages/client/Products/ProductsPage";
import { Routes, Route } from "react-router-dom";
import WebsiteLayout from "./pages/Layout/WebsiteLayout";
import Homepage from "./pages/client/Homepage/Homepage";

function App() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/iphone" element={<h1>Iphone Page</h1>} />
          <Route path="/mac" element={<h1>MacBook page</h1>} />
          <Route path="/imac" element={<h1>Imac page</h1>} />
          <Route path="/apple-watch" element={<h1>Apple Watch</h1>} />
          <Route path="/phu-kien" element={<h1>Phu kien page</h1>} />
          <Route path="/tin-tuc" element={<h1>Tin Tuc</h1>} />
          <Route path="/dich-vu" element={<h1>Dich vu</h1>} />
        </Route>
        {/* <ProductsPage product={products}/> */}
      </Routes>
    </div>
  );
}

export default App;
