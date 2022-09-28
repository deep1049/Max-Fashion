import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoysNavbar from "../navbarhover/BoysNavbar";
import GirlsNavbar from "../navbarhover/GirlsNavbar";
import MenNavbar from "../navbarhover/MenNavbar";
import WomenNavbar from "../navbarhover/WomenNavbar";

const Header = () => {
  const navigateTo = useNavigate();
  const [showHoverContent, setShowHoverContent] = useState({
    show: false,
    contentFor: "",
  });
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };

  const SetHoverContent = (content) => {
    console.log("content", content);
    setShowHoverContent({
      show: true,
      contentFor: content,
    });
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
            {/* <FontAwesomeIcon icon="fa-regular fa-truck" /> */}
            <span>Free Shipping</span>
          </div>
          <div className="item">
            Store
            <span>Return to Store</span>
          </div>
          <div className="item">
            Card
            <span>Online Gift Card</span>
          </div>
        </div>
        <div className="right">
          <div className="item">Download Our Apps</div>
          <div className="item">Store Locator</div>
          <div className="item">Help</div>
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
          <div className="item">Sign Up / Sign In</div>
          <div className="item">Heart</div>
          <div className="item">Bag</div>
        </div>
      </div>
      <div className="banner">
        Flat 30-50% off + Extra ₹300 off + FREE shipping!
      </div>
      {/* Content On Hover*/}
      {showHoverContent.show ? (
        <div className="hover-content">
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
