import Footer from "../components/Footer";
import Header from "../components/Header";

const Boys = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="box1">
          <img src="../images/boys/boy.png" />
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
            <img src="../images/boys/boy1.png" />
            <img src="../images/boys/boy2.png" />
            <img src="../images/boys/boy3.png" />
          </div>
        </div>
        <div className="box4men">
          <h1 className="hh">Shop By Category</h1>

          <div className="lower">
            <div className="image">
              <img src="../images/boys/boy4.png" />
              <p>Tops & Tees</p>
            </div>
            <div className="image">
              <img src="../images/boys/boy5.png" />
              <p>Dresses</p>
            </div>
            <div className="image">
              <img src="../images/boys/boy6.png" />
              <p>Bottoms</p>
            </div>
            <div className="image">
              <img src="../images/boys/boy7.png" />
              <p>Sleepwear</p>
            </div>
            <div className="image">
              <img src="../images/boys/boy8.png" />
              <p>Active Wear</p>
            </div>
            <div className="image">
              <img src="../images/boys/boy9.png" />
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
            <img src="../images/boys/new1.png" />
            <img src="../images/boys/new2.png" />
          </div>
        </div>
        <div className="box6">
          <h1>Festive Must-Haves</h1>
          <div>
            <img src="../images/boys/festive1.png" />
            <img src="../images/boys/festive2.png" />
          </div>
        </div>
        <div className="box7">
          <h1>Budget Zone</h1>
          <div>
            <img src="../images/boys/budget1.png" />
            <img src="../images/boys/budget2.png" />
            <img src="../images/boys/budget3.png" />
          </div>
        </div>
        <div className="box8">
          <h1>Top Stores</h1>
          <div>
            <img src="../images/boys/boy10.png" />
          </div>
        </div>
        <div className="box9">
          <h1>Hot Trends</h1>
          <div>
            <img src="../images/boys/hottrends1.png" />
            <img src="../images/boys/hottrends2.png" />
          </div>
        </div>

        <div className="box11">
          <div>
            <img src="../images/boys/viewall.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Boys;
