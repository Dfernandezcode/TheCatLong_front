import SliderLogos from "../../SliderLogos/SliderLogos";
import "./HomePage.scss";
import Login from "../../Login/Login.tsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <SliderLogos></SliderLogos>
      <Login></Login>
    </div>
  );
};

export default HomePage;
