import "./App.scss";

import CardDescription from "./components/card/card-description/card-description";
import CardPreview from "./components/card/card-preview/card-preview";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { exampleProduct } from "./components/card/__mocks__/exampleProduct";

function App() {
  return (
    <>
      <CardPreview product={exampleProduct} />
      <CardDescription />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
