import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boys from "./views/Boys";
import Girls from "./views/Girls";
import Men from "./views/Men";
import MenProducts from "./views/MenProducts";
import Women from "./views/Women";
import Login from "./views/Login";
import WomenProduct from "./views/womenProducts";
import Bag from "./views/bag";
import Signup from "./views/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Women />} />
          <Route path="/women-product" element={<WomenProduct />} />
          {/* <Route path="/" element={<WomenProduct />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* men routes */}
          <Route path="/men" element={<Men />} />
          <Route path="/men-product" element={<MenProducts />} />
          {/*  */}
          <Route path="/bag" element={<Bag />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/girls" element={<Girls />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
