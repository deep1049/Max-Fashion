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
        Men
        <div
          style={{ cursor: "pointer" }}
          onClick={() => GoTo("/men/men-products")}
        >
          Get men Products
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
