import "./HomePage.scss";
import Header from "../../Header/Header.tsx";
import Footer from "../../Footer/Footer.tsx";
import Login from "../../Login/Login.tsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header></Header>
      <Login />
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
