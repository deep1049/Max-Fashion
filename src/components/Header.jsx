import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import BoysNavbar from "../navbarhover/BoysNavbar";
import GirlsNavbar from "../navbarhover/GirlsNavbar";
import MenNavbar from "../navbarhover/MenNavbar";
import WomenNavbar from "../navbarhover/WomenNavbar";
import { BsFillHeartFill } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { MdOutlineStorefront } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
// import { IoStorefrontOutline } from "react-icons/io";

const Header = (props) => {
  const navigateTo = useNavigate();
  const [bag, setBag] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [showHoverContent, setShowHoverContent] = useState({
    show: false,
    contentFor: "",
  });
  useEffect(() => {
    SetCart();
    setLoggedIn(localStorage.getItem("user"));
  }, [props]);
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  const SetCart = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setBag(cart);
    }
  };
  const SetHoverContent = (content) => {
    console.log("content", content);
    setShowHoverContent({
      show: true,
      contentFor: content,
    });
  };

  const HoverContentClasses = (contentFor) => {
    let _class = "";

    if (contentFor === "women") {
      _class = "nav-women-content";
    }

    if (contentFor === "girls") {
      _class = "nav-girls-content";
    }

    if (contentFor === "boys") {
      _class = "nav-boys-content";
    }

    return `hover-content ${_class}`;
  };

  const Logout = () => {
    localStorage.removeItem("user");
    setLoggedIn(localStorage.getItem("user"));
  };

  return (
    <div
      className="header"
      onMouseLeave={() => {
        setShowHoverContent({ show: false, contentFor: "" });
      }}
    >
      <div className="extra-options">
        <div className="left">
          <div className="item">
            <i className="fa-solid fa-truck"></i>
            <span>Free Shipping</span>
          </div>
          <div className="item">
            {/* <IoStorefrontOutline /> */}
            {/* <i class="fa-light fa-shop"></i> */}
            {/* <HiOutlineBuildingStorefront /> */}
            {/* <IoStorefrontOutline /> */}
            <MdOutlineStorefront />
            <span>Return to Store</span>
          </div>
          <div className="item">
            {/* <i class="fa-thin fa-gift-card"></i> */}
            <BsGift />
            <span>Online Gift Card</span>
          </div>
        </div>
        <div className="right">
          <div className="item">Download Our Apps | </div>
          <div className="item">Store Locator | </div>
          <div className="item"> Help</div>
        </div>
      </div>
      <div className="navbar">
        <div className="brand-name">
          <strong>m</strong>
          <strong>a</strong>
          <strong>x</strong>
        </div>
        <div className="sections">
          <div className="item">
            <label
              onClick={() => GoTo("/")}
              onMouseEnter={() => {
                SetHoverContent("women");
              }}
            >
              Women
            </label>
            {/* <a href="/">Women</a> */}
          </div>
          <div className="item">
            <label
              onClick={() => GoTo("/men")}
              onMouseEnter={() => {
                SetHoverContent("men");
              }}
            >
              Men
            </label>
            {/* <a href="/men">Men</a> */}
          </div>
          <div className="item">
            <label
              onClick={() => GoTo("/boys")}
              onMouseEnter={() => {
                SetHoverContent("boys");
              }}
            >
              Boys
            </label>
            {/* <a href="/boys">Boys</a> */}
          </div>
          <div className="item">
            <label
              onClick={() => GoTo("/girls")}
              onMouseEnter={() => {
                SetHoverContent("girls");
              }}
            >
              Girls
            </label>
            {/* <a href="/girls">Girls</a> */}
          </div>
        </div>
        <div className="search">
          <input className="inputTab" placeholder="What are you looking for?" />
        </div>
        <div className="options">
          <div className="item">More</div>
          {loggedIn ? (
            <div className="item" onClick={Logout}>
              Logout
            </div>
          ) : (
            <>
              {" "}
              <div className="item" onClick={() => GoTo("/signup")}>
                Sign Up
              </div>
              <div className="item" onClick={() => GoTo("/login")}>
                Sign In
              </div>
            </>
          )}
          <div className="item">
            <BsFillHeartFill />
          </div>
          <div className="item bag-item" onClick={() => GoTo("/bag")}>
            <BsBagCheck />
            <span className="bag-count">{bag.length}</span>
          </div>
        </div>
      </div>
      <div className="banner">
        Flat 30-50% off + Extra ₹300 off + FREE shipping!
      </div>
      {/* Content On Hover*/}
      {showHoverContent.show ? (
        <div className={HoverContentClasses(showHoverContent.contentFor)}>
          {showHoverContent.contentFor === "women" ? <WomenNavbar /> : null}
          {showHoverContent.contentFor === "men" ? <MenNavbar /> : null}
          {showHoverContent.contentFor === "boys" ? <BoysNavbar /> : null}
          {showHoverContent.contentFor === "girls" ? <GirlsNavbar /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
