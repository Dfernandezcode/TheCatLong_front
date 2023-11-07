import "./App.scss";
// import SignUpForm from "./components/SignUpForm/SignUpForm";
import CardDescription from "./components/card/card-description/card-description";
import CardPreview from "./components/card/card-preview/card-preview";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import { exampleProduct } from "./components/card/__mocks__/exampleProduct";
import HomePage from "./components/pages/HomePage/HomePage";
import Deportes from "./components/pages/Deportes/Deportes";
import Hombre from "./components/pages/Hombre/Hombre";
import Mujer from "./components/pages/Mujer/Mujer";

function App() {
  return (
    <>
      <CardPreview product={exampleProduct} />
      <CardDescription />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/deportes" element={<Deportes></Deportes>}></Route>
          <Route path="/hombre" element={<Hombre></Hombre>}></Route>
          <Route path="/mujer" element={<Mujer></Mujer>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
