import Footer from "../components/Footer";
import Header from "../components/Header";

const Girls = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="box1">
          <img src="../images/girls/girl.png" />
        </div>
        <div className="box2">
          <img src="../images/women/truckrunning.gif" />
        </div>
        <div className="box3">
          <img src="../images/women/fashion.png" />
        </div>
        <div className="box7">
          <h1>Shop By Age</h1>
          <div>
            <img src="../images/girls/girl7.png" />
            <img src="../images/girls/girl8.png" />
            <img src="../images/girls/girl9.png" />
          </div>
        </div>
        <div className="box4men">
          <h1 className="hh">Shop By Category</h1>

          <div className="lower">
            <div className="image">
              <img src="../images/girls/girl2.png" />
              <p>Tops & Tees</p>
            </div>
            <div className="image">
              <img src="../images/girls/girl3.png" />
              <p>Dresses</p>
            </div>
            <div className="image">
              <img src="../images/girls/girl4.png" />
              <p>Bottoms</p>
            </div>
            <div className="image">
              <img src="../images/girls/girl5.png" />
              <p>Sleepwear</p>
            </div>
            <div className="image">
              <img src="../images/girls/girl1.png" />
              <p>Active Wear</p>
            </div>
            <div className="image">
              <img src="../images/men/men7.png" />
              <p>Add-Ons</p>
            </div>
          </div>
        </div>
        <div className="box1">
          <h1>Customer Favorite!</h1>
          <img src="../images/girls/favorite.gif" />
        </div>
        <div className="box5">
          <h1>New In</h1>
          <div>
            <img src="../images/girls/new1.png" />
            <img src="../images/girls/new2.png" />
          </div>
        </div>
        <div className="box6">
          <h1>Festive Must-Haves</h1>
          <div>
            <img src="../images/girls/festive1.png" />
            <img src="../images/girls/festive2.png" />
          </div>
        </div>
        <div className="box7">
          <h1>Budget Zone</h1>
          <div>
            <img src="../images/girls/budget1.png" />
            <img src="../images/girls/budget2.png" />
            <img src="../images/girls/budget3.png" />
          </div>
        </div>
        <div className="box8">
          <h1>Top Stores</h1>
          <div>
            <img src="../images/girls/girl10.png" />
          </div>
        </div>
        <div className="box9">
          <h1>Hot Trends</h1>
          <div>
            <img src="../images/girls/hottrends1.png" />
            <img src="../images/girls/hottrends2.png" />
          </div>
        </div>

        <div className="box11">
          <div>
            <img src="../images/girls/viewall.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Girls;
