import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart/Cart';
import Modal from './Modal/Modal';


const ProductsContent = () => {
  const [data, setData] =  useState();
  const [modal, setModal] =  useState();
  const [cart, setCart] =  useState([]);
  const navigate = useNavigate();

  const addToCart = (e) => {
    setCart([ ...cart, e]);
  }
  const removeItem = (eIndex) => {
    const rmvItem = cart.filter((el, i) => (i !== eIndex));
    setCart(rmvItem);
  }

  useEffect(() => {
    axios.get("https://example-data.draftbit.com/products")
    .then((response) => {
      console.log("response", response.data);
      setData(response.data);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <div>
        <br />
        <br />
        <div className="row">
          {data?.map((el) => (
            <div className="card">
              <img src={el.image_url} alt="" />
              <h3>{el.name}</h3>
              <button onClick={() => navigate(`/products/${el.id}`)}>View more</button>
              <button onClick={() => addToCart(el)} >Add to Cart</button>
            </div>
          ))}
        </div>
        <Cart open={() => setModal(true)} countNr={cart?.length} />
        <Modal isOpen={modal} close={() => setModal(false)}>
          <div>
            {cart?.map((el, index) => (
              <div className="cart-items">
                <img src={el.image_url} alt="" />
                <h3>{el.name}</h3>
                <button onClick={() => removeItem(index)}>X</button>
              </div>
            ))}
          </div>
        </Modal>
    </div>
  )
}

export default ProductsContent;
