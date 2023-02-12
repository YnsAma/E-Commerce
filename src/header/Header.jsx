import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";


function Header({handleSearch,clearSearch}) {
  const [isVisible, setIsVisble] = useState(false);
  const products = useSelector((state) => state.cart);
  const dispatch =useDispatch();
  const handleVisible = () => {
    setIsVisble(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(e)

    ;
  };


  return (
    <>
      <header className="header">
        <h3 className="header-title"><Link to ="/">E-Commerce</Link></h3>
        <div className="header-search-form">
          <input
            type="search"
            className="header-search-input"
            placeholder="Search for products..."
            onChange={(e)=>handleSubmit(e)}
          />
          <button className="header-search-button" onClick={(e)=>handleSubmit(e)}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="header-cart" onClick={handleVisible}>
          <i className="fa fa-shopping-cart"></i>
          <span className="header-cart-text">Cart</span>
        </div>
      </header>
      {isVisible && (
        <div className="cart">
          <h3 className="cart-title">Your Cart</h3>
          <table className="cart-table">
            <tbody>
              {products &&
                products.map((product) => {
                  return (
                    <tr className="cart-item" key={product.id}>
                      <td className="item-quantity"><img src={product.images[0]} alt="" /></td>
                      <td className="item-name">{product.title}</td>
                      <td className="item-price">${product.price}</td>
                      <td>
                        <button className="remove-btn" onClick={()=>dispatch({type:'REMOVE_PRODUCT',payload:product.id})}>Remove</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </>
  );
}

export default Header;
