import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const navigateTo = useNavigate();

  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  return (
    <div>
      <Header />
      <div className="main">
        {/* Men
        <div
          style={{ cursor: "pointer" }}
          onClick={() => GoTo("/men/men-products")}
        >
          Get men Products
        </div> */}
        <div
          className="box1"
          style={{ cursor: "pointer" }}
          onClick={() => GoTo("/men-product")}
        >
          <img src="../images/men/men.png" />
        </div>
        <div className="box2">
          <img src="../images/women/truckrunning.gif" />
        </div>
        <div className="box3">
          <img src="../images/women/fashion.png" />
        </div>
        <div
          className="box4men"
          style={{ cursor: "pointer" }}
          onClick={() => GoTo("/men-product")}
        >
          <h1 className="hh">Shop By Category</h1>

          <div className="lower">
            <div className="image">
              <img src="../images/men/men2.png" />
              <p>Tops & Tees</p>
            </div>
            <div className="image">
              <img src="../images/men/men3.png" />
              <p>Dresses</p>
            </div>
            <div className="image">
              <img src="../images/men/men4.png" />
              <p>Bottoms</p>
            </div>
            <div className="image">
              <img src="../images/men/men5.png" />
              <p>Sleepwear</p>
            </div>
            <div className="image">
              <img src="../images/men/men6.png" />
              <p>Active Wear</p>
            </div>
            <div className="image">
              <img src="../images/men/men7.png" />
              <p>Add-Ons</p>
            </div>
          </div>
        </div>
        <div
          className="box1"
          style={{ cursor: "pointer" }}
          onClick={() => GoTo("/men-product")}
        >
          <h1>Top Stories</h1>
          <img src="../images/men/men8.jpg" />
        </div>
        <div
          className="box5"
          style={{ cursor: "pointer" }}
          onClick={() => GoTo("/men-product")}
        >
          <h1>New In</h1>
          <div>
            <img src="../images/men/new1.png" />
            <img src="../images/men/new2.png" />
          </div>
        </div>
        <div className="box6">
          <h1>Shop By Festivity</h1>
          <div>
            <img src="../images/men/shop1.png" />
            <img src="../images/men/shop2.png" />
          </div>
        </div>
        <div className="box7">
          <h1>Budget Zone</h1>
          <div>
            <img src="../images/men/budget1.png" />
            <img src="../images/men/budget2.png" />
            <img src="../images/men/budget3.png" />
          </div>
        </div>
        <div className="box8">
          <h1>Youth Store</h1>
          <div>
            <img src="../images/men/youth.png" />
          </div>
        </div>
        <div className="box9">
          <h1>Hot Trends</h1>
          <div>
            <img src="../images/men/hottrend1.png" />
            <img src="../images/men/hottrend2.png" />
          </div>
        </div>
        <div className="box10">
          <h1>Top Stories</h1>
          <div>
            <img src="../images/men/top1.png" />
            <img src="../images/men/top2.png" />
          </div>
        </div>
        <div className="box11">
          <div>
            <img src="../images/men/viewall.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
