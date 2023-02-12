import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./productList.css";

function ProductList({ products, FiltredProducts }) {
  const dispatch = useDispatch();

  

  /* the signle product  */
  const Product = ({ product }) => {
    return (
      <div className="card">
        <div className="img">
          <img src={product.images[0]} alt={product.title} />
          <p className="category">{product.category}</p>
        </div>
        <div className="card-details">
          <div className="deatils-header">
            <h1>{product.title}</h1>
            <h1 className="price">${product.price}</h1>
          </div>
          <p className="card-descreption">{product.description}</p>
          <div className="links">
            <button
              onClick={() =>
                dispatch({ type: "ADD_PRODUCT", payload: product })
              }
            >
              <i className="fas fa-shopping-cart"></i>
              ADD TO BAGG{" "}
            </button>
            <button>
              <Link to={`single/${product.id}`}>
                <i className="fas fa-eye"></i>
                VEIW DETAILS
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="products-container ">
      {FiltredProducts.length>0
        ? FiltredProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        : products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
    </div>
  );
}

export default ProductList;
