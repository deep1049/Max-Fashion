import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boys from "./views/Boys";
import Girls from "./views/Girls";
import Men from "./views/Men";
import MenProducts from "./views/MenProducts";
import Women from "./views/Women";
import Login from "./views/Login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Men />} />
          <Route path="/men/men-products" element={<MenProducts />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/girls" element={<Girls />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
