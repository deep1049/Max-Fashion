import { BsFillQuestionSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerbox1">
        <h1>Connect With Us</h1>
        <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg" />
      </div>
      <div className="footerbox2">
        <div>
          <h2>Subscribe to our awesome emails.</h2>
          <p>Get our latest offers and news straight in your inbox.</p>
          <input placeholder="please enter the email address here" />
          <span>
            <button>Subscribe</button>
          </span>
        </div>
        <div>
          <h2>Download our apps</h2>
          <p>Shop our products and offers on-the-go..</p>
        </div>
      </div>
      <div className="footerbox3">
        <div className="Row1">
          <div className="session">
            <h3>Women</h3>
            <div className="item">Tops</div>
            <div className="item">Dresses & Jumpsuits</div>
            <div className="item">Sportswear</div>
            <div className="item">Bottoms</div>
            <div className="item">Winterwear</div>
            <div className="item">Ethnicwear</div>
            <div className="item">Lingerie</div>
            <div className="item">Sleepwear</div>
            <div className="item">Accessories</div>
            <div className="item">Shoes</div>
          </div>
          <div className="session">
            <h3>Men</h3>
            <div className="item">Tops</div>
            <div className="item">Sportswear</div>
            <div className="item">Bottoms</div>
            <div className="item">Winterwear</div>
            <div className="item">Accessories</div>
            <div className="item">Shoes</div>
          </div>
          <div className="session">
            <h3>Boys</h3>
            <div className="item">Tops</div>
            <div className="item">Bottoms</div>
            <div className="item">Innerwear</div>
            <div className="item">Winterwear</div>
            <div className="item">Essentials</div>
            <div className="item">Accessories</div>
            <div className="item">Shoes</div>
          </div>
          <div className="session">
            <h3>Girls</h3>
            <div className="item">Tops</div>
            <div className="item">Bottoms</div>
            <div className="item">Innerwear</div>
            <div className="item">Winterwear</div>
            <div className="item">Essentials</div>
            <div className="item">Accessories</div>
            <div className="item">Shoes</div>
          </div>
          <div className="session">
            <h3>Explore</h3>
            <div className="item">Offers</div>
            <div className="item">Magazine</div>
          </div>
        </div>
        <div className="Row2">
          <div className="session">
            <h3>About</h3>
            <div className="item">About us</div>
            <div className="item">Write to us</div>
            <div className="item">Careers</div>
            <div className="item">Take a Tour</div>
            <div className="item">Blog</div>
            <div className="item">Store Locator</div>
            <div className="item">Landmark Cares</div>
          </div>
          <div className="session">
            <h3>Help</h3>
            <div className="item">Contact us</div>
            <div className="item">Shipping</div>
            <div className="item">Returns Process</div>
            <div className="item">Returns Policy</div>
            <div className="item">Help Centre</div>
          </div>
        </div>
      </div>
      <div className="footerbox4">
        <div className="left">
          <div className="contact">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <p>Talk to us</p>
            <h4>1800-123-1444</h4>
          </div>
          <div className="contact">
            <span>
              <BsFillQuestionSquareFill className="size-16" />
            </span>
            <p>Helpcentre</p>
            <h4>help.maxfashion.com</h4>
          </div>
          <div className="contact">
            <span>
              <i className="fa-solid fa-message-dots"></i>
            </span>
            <p>write to us</p>
            <h4>help.in@maxfashion.com</h4>
          </div>
        </div>
        <div className="rigth">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="footerbox5">
        <div className="brand-name">
          <strong>m</strong>
          <strong>a</strong>
          <strong>x</strong>
        </div>

        <div>
          <p>© 2022 Retail World Limited.</p>
          <p>Terms & Conditions - Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
