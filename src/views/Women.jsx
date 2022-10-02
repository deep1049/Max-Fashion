import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const Women = () => {
  const navigateTo = useNavigate();
  const goto = (path) => {
    navigateTo(path);
  };
  return (
    <div>
      <Header />

      {/* onClick={() => GoTo("/men/men-products")} */}

      <div className="main">
        <div
          className="box1"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <img src="../images/women/image3.png" />
        </div>
        <div
          className="box2"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <img src="../images/women/truckrunning.gif" />
        </div>
        <div className="box3">
          <img src="../images/women/fashion.png" />
        </div>
        <div
          className="box4"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1 className="hh">Shop By Category</h1>
          <div className="upper">
            <div className="image">
              <img src="../images/women/fashion1.png" />
              <p>Plus Size 3XL-6XL</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion2.png" />
              <p>Aailable online only</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion3.png" />
              <p>KURTAS</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion4.png" />
              <p>Suits & Sets</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion5.png" />
              <p>Fusion Dresses</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion6.png" />
              <p>Sweatshirts</p>
            </div>
          </div>
          <div className="lower">
            <div className="image">
              <img src="../images/women/fashion7.png" />
              <p>Tops & Tees</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion8.png" />
              <p>Dresses</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion9.png" />
              <p>Bottoms</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion10.png" />
              <p>Sleepwear</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion11.png" />
              <p>Active Wear</p>
            </div>
            <div className="image">
              <img src="../images/women/fashion12.png" />
              <p>Add-Ons</p>
            </div>
          </div>
        </div>
        <div
          className="box5"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1>New In</h1>
          <div>
            <img src="../images/women/newin1.png" />
            <img src="../images/women/newin2.png" />
          </div>
        </div>
        <div
          className="box6"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1>Shop By Festivity</h1>
          <div>
            <img src="../images/women/shopby1.png" />
            <img src="../images/women/shopby2.png" />
          </div>
        </div>
        <div
          className="box7"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1>Budget Zone</h1>
          <div>
            <img src="../images/women/budget1.png" />
            <img src="../images/women/budget2.png" />
            <img src="../images/women/budget3.png" />
          </div>
        </div>
        <div
          className="box8"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1>Youth Store</h1>
          <div>
            <img src="../images/women/youth.png" />
          </div>
        </div>
        <div
          className="box9"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1>Hot Trends</h1>
          <div>
            <img src="../images/women/hottrend1.png" />
            <img src="../images/women/hottrend2.png" />
          </div>
        </div>
        <div
          className="box10"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <h1>Top Stories</h1>
          <div>
            <img src="../images/women/topstories1.png" />
            <img src="../images/women/topstories2.png" />
          </div>
        </div>
        <div
          className="box11"
          style={{ cursor: "pointer" }}
          onClick={() => goto("/women-product")}
        >
          <div>
            <img src="../images/women/viewall.png" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Women;
