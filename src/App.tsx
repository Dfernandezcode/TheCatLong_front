import "./App.scss";
// import SignUpForm from "./components/SignUpForm/SignUpForm";
import CardDescription from "./components/card/card-description/card-description";
import CardPreview from "./components/card/card-preview/card-preview";
import { HashRouter, Routes, Route } from "react-router-dom";
import { exampleProduct } from "./components/card/__mocks__/exampleProduct";
import HomePage from "./components/pages/HomePage/HomePage";
import Deportes from "./components/pages/Deportes/Deportes";
import Hombre from "./components/pages/Hombre/Hombre";
import Mujer from "./components/pages/Mujer/Mujer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import English from "./translations/en.json";
import Spanish from "./translations/es.json";
import { createContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

export const LanguageSelector = createContext({
  language: navigator.language,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (_lang: string) => {},
});
function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <>
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/deportes" element={<Deportes></Deportes>}></Route>
              <Route path="/hombre" element={<Hombre></Hombre>}></Route>
              <Route path="/mujer" element={<Mujer></Mujer>}></Route>
            </Routes>
          </HashRouter>
          <CardPreview product={exampleProduct} />
          <CardDescription product={exampleProduct} />
          <Footer></Footer>
        </IntlProvider>
      </LanguageSelector.Provider>
    </>
  );
}

export default App;
