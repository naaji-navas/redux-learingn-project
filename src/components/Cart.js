import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart);
  const removeFromTheCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const cards = cartProducts.map((product) => {
    return (
      <div className="col-md-3 mb-4">
        <Card key={product.id} className="h-100 " style={{ width: "18rem" }}>
          <div className="flex p-3 justify-center items-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR : {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <button
              onClick={() => {
                removeFromTheCart(product.id);
              }}
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove from Cart
            </button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div className="App mx-5">
      <h1 className="text-2xl font-bold mt-2">Products Dashboard</h1>
      <div className="row my-5">{cards}</div>
    </div>
  );
};

export default Cart;
