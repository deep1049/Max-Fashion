// import Footer from "../components/Footer";
// import Header from "../components/Header";
// const MenProducts = () => {
//   return <div>
//     Men Products Page hello</div>;
// };

// export default MenProducts;
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MEN_DATA } from "../utility/mendata";
const MenProduct = () => {
  const navigateTo = useNavigate();
  const [data, setData] = useState([...MEN_DATA]);
  const [cartlength, setCartLength] = useState(0);

  const goto = (path) => {
    navigateTo(path);
  };

  const AddToCart = (product) => {
    console.log("dev", product);

    let cart = localStorage.getItem("cart");

    if (cart) {
      cart = JSON.parse(cart);
      cart.push(product);
      alert("Item added to the cart");
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartLength(cart.length);
    } else {
      let arr = [];
      arr.push(product);
      alert("Item added to the cart");
      localStorage.setItem("cart", JSON.stringify(arr));
      setCartLength(arr.length);
    }
  };

  return (
    <div className="trending">
      <Header random={cartlength} />
      <div className="products">
        {data.map((item) => {
          return (
            <div className="product">
              <img src={item.img} />
              <div className="name">{item.name}</div>
              <div className="price">Rs.{item.price}</div>
              <button
                className="add-to-cart"
                onClick={() => {
                  AddToCart(item);
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default MenProduct;
