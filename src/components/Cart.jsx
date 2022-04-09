import React, { useContext, useState } from "react";
import CartSidebar from "./CartSidebar";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { contextCart } from "../context/CartContext";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const {
    state: { cart },
    dispatch,
  } = useContext(contextCart);
  //console.log("cart", global);

  const updateQuantity = (id) => {
    let qty = cart.find((cr) => cr.id === id);
  };

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {cart.length} items</h5>
              </div>
              {cart.map((prod) => (
                <div className="card-body" key={prod.id}>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={prod.image}
                          className="w-100"
                          alt="Blue Jeans Jacket"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          ></div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>{prod.name}</strong>
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      >
                        <MdDeleteOutline size={24} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                      >
                        <AiOutlineHeart size={24} />
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div
                        className="d-flex mb-4"
                        style={{ maxWidth: "300px" }}
                      >
                        <button
                          className="btn btn-primary px-3 me-2"
                          onClick={() => updateQuantity(prod.id)}
                          disabled={quantity < 2}
                        >
                          <AiOutlineMinus />
                        </button>

                        <div className="form-outline">
                          <form>
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              type="number"
                              className="form-control"
                              value={quantity}
                              readOnly={true}
                            />
                            <label className="form-label" htmlFor="form1">
                              Quantity
                            </label>
                          </form>
                        </div>

                        <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={() => updateQuantity(prod.id)}
                          disabled={quantity > prod.inStock - 1}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>

                      <p className="text-start text-md-center">
                        <strong>${prod.price}</strong>
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}
            </div>
          </div>
          <CartSidebar />
        </div>
      </div>
    </section>
  );
};

export default Cart;
