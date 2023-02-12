import "./App.css";
import { useState, useEffect } from "react";
import Header from "./header/Header";
import ProductList from "./product list/ProductList";
import Single from "./singleProduct/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [FiltredProducts, setFiltredProducts] = useState([]);

  /* load the products from the api and affect the data to the state */
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  /** search function */

  const handleSearch = (event) => {
    const trim = event.target.value;
    setFiltredProducts(products.filter((pr) => {
      return pr.title.toLowerCase().includes(trim.toLowerCase());
    }));
  
    if (!trim) {
      setFiltredProducts([]);
    }
  };
  

  /***clear search function */
  const clearSearch =()=>{
    setFiltredProducts([])
  }

  return (
    <>
      <BrowserRouter>
        <Header handleSearch={handleSearch} clearSearch={clearSearch}/>
        <Routes>
          <Route path="/" element={<ProductList products={products} FiltredProducts={FiltredProducts}/>} />
          <Route
            path="single/:productId"
            element={<Single products={products} />}
          />
        </Routes>
      </BrowserRouter>

      {/* <ProductList/> */}
    </>
  );
}

export default App;
