import React ,{useState}from "react";
import "./single.css";
import {  useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Single = ({ products }) => {
  const { productId } = useParams();
  const [imgId,setImgId] = useState(0);
  const dispatch = useDispatch()
  const product = products.find((pr) => pr.id === parseInt(productId));

  if (!products.length) return <p>Loading...</p>;
  if (!product) return <div>Product not found</div>;
 
  const switchRight =()=>{
    if(imgId<product.images.length-1){
      setImgId(imgId+1)
    }else{
      setImgId(0)
    }

  }

  const switchLeft=()=>{
    if(imgId==0){
      setImgId(3)
    }else{
      setImgId(imgId-1)
    }
    console.log(imgId)
  }
  return (
    <div className="container">
      <div className="thub">
        <img src={product.images[imgId]} alt="" />
        <div className="switch">
          <i class="fas fa-arrow-right" onClick={switchRight}></i>
          <span>0{imgId+1}/04</span>
          <i class="fas fa-arrow-left" onClick={switchLeft}></i>
        </div>
      </div>
      <div className="details">
        <h1 className="title">{product.title}</h1>
        <p className="brand">{product.brand}</p>
        <div className="price">
          <p> ${" "}{product.price}</p>
          <span></span>
        </div>
        <p className="descreption">{product.description}</p>
        <button className="btn" onClick={()=>dispatch({type :'ADD_PRODUCT',payload:product})}>ADD TO BAG</button>
      </div>
    </div>
  );
};

export default Single;
