import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
