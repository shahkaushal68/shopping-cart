import React, { useContext, useEffect, useState } from "react";
import { contextCart } from "../context/CartContext";

const CartSidebar = () => {
  const {
    state: { cart },
  } = useContext(contextCart);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>$ {total}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <strong>$ {total}</strong>
              </span>
            </li>
          </ul>

          <button type="button" className="btn btn-primary btn-lg btn-block">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
