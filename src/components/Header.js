import React, { useContext } from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { contextCart } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart, products },
    dispatch,
  } = useContext(contextCart);
  const global = useContext(contextCart);
  console.log("header", global);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h5>Shopping Cart</h5>
          </div>
          <div className="search__bar__header">
            <input type="text" />
            <input type="button" value="search" />
          </div>
          <div className="cart__header__desktop dropDown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <AiOutlineShoppingCart fontSize={18} />
              <span>{cart.length}</span>
            </button>
            <ul className="dropdown-menu">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <li key={item.id}>
                    {item.name}
                    <span
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      <MdDelete
                        style={{ color: "red", cursor: "pointer" }}
                        size={22}
                      />
                    </span>
                  </li>
                ))
              ) : (
                <li> Cart is Empty</li>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <div className="main__navigations">
        <div className="main__navigations__div">
          <ul className="main__navigations__div__ul">
            <li className="main__navigations__div__li on__mobile_d_none">
              <Link to="/">Home</Link>
            </li>
            <li className="main__navigations__div__li">
              <Link to="/cart" className="anchor__remains__same">
                View Cart <i className="fas fa-sign-out-alt"></i>
              </Link>
            </li>
            <div className="bars save__from__right">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </ul>
        </div>
      </div>

      <div className="mobile__nav__fade__and__show">
        <div className="mobile__nav__fade__and__show__text">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Categories</a>
            <div>
              <p>
                <a href="">Category 1</a>
              </p>
            </div>
          </li>
        </div>
      </div>
      <div className="mobile__nav__fade__and__show__circle"></div>
    </>
  );
};

export default Header;
