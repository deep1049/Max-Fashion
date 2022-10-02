import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Bag = () => {
  const navigateTo = useNavigate();
  const goto = (path) => {
    navigateTo(path);
  };
  const [bag, setBag] = useState([]);
  // const navigateTo = useNavigate();

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setBag(cart);
    }
  }, []);

  const RemoveProduct = (product) => {
    let newArr = [];
    let flag = 0;
    newArr = bag.filter((item) => {
      if (item.name === product.name) {
        if (flag === 0) {
          flag = 1;
          return false;
        } else {
          return true;
        }
      } else {
        return item.name !== product.name;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newArr));
    setBag(newArr);
  };
  const Calculate = (type) => {
    let result = 0;
    if (type === "producttotal") {
      bag.forEach((item) => {
        result += item.price;
      });
    }
    if (type === "checkouttotal") {
      bag.forEach((item) => {
        result += item.price;
      });
      result += 100;
    }
    return result;
  };
  const PlaceOrder = () => {
    alert("Order Placed");
    localStorage.removeItem("cart");
    navigateTo("/");
  };
  return (
    <div>
      <Header />
      <h1 className="bagh1">Your Shopping Basket</h1>
      <div className="product-count">
        {bag.length} {`Product${bag.length !== 1 ? "s" : ""}`}
      </div>
      <div className="bag">
        <div className="bag-contents">
          {bag.length === 0 ? (
            <div className="no-items">
              Your Bag Is Empty
              <img src="/images/cartgif.gif" />
            </div>
          ) : null}
          {bag.map((item) => {
            return (
              <div className="bag-item">
                <img src={item.img} />
                <div>
                  <div className="name">{item.name}</div>
                  <div className="price">Rs.{item.price}</div>
                </div>
                <div>
                  <AiOutlineClose
                    onClick={() => {
                      RemoveProduct(item);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="delivery-details">
          <div className="price-breakdown">
            <label>
              Address
              <input placeholder="Address" />
            </label>
            <label>
              Total MRP <span>Rs.{Calculate("producttotal")}</span>
            </label>
            <label>
              Offer Discount <span className="green-text">-Rs.0</span>
            </label>
            <label>
              Shopping Charge <span>Rs.100</span>
            </label>
            <label className="big-bold-text">
              Total <span>Rs.{Calculate("checkouttotal")}</span>
            </label>
          </div>
          <div className="buttons">
            <button
              style={{ cursor: "pointer" }}
              onClick={() => goto("/women-product")}
            >
              Continue Shopping
            </button>
            <button onClick={PlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Bag;
