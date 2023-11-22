import "./Deportes.scss";
import CardButton from "../../CardButton/CardButton";

const Deportes = () => {
  const handleButtonClick = (category: unknown) => {
    // Llamada a la base de datos para filtrar productos por categoría
    console.log(`Filtrando productos de la categoría: ${category}`);
  };

  return (
    <div className="deportes__container">
      <div>
        <img className="deportes__img" src=""></img>
        <h2 className="deportes__title">DEPORTES</h2>
      </div>
      <h3 className="deportes__subtitle">CATEGORÍAS</h3>
      <div className="deportes__grid">
        <CardButton title="BALONCESTO" imageUrl="src/assets/ImgSections/sports/baloncesto_3.jpg" onClick={handleButtonClick} />
        <CardButton title="FÚTBOL" imageUrl="src/assets/ImgSections/sports/futbol.jpg" onClick={handleButtonClick} />
        <CardButton title="CICLISMO" imageUrl="src/assets/ImgSections/sports/ciclismo.jpg" onClick={handleButtonClick} />
        <CardButton title="PATINAJE" imageUrl="src/assets/ImgSections/sports/patinaje.jpg" onClick={handleButtonClick} />
        <CardButton title="RUNNING" imageUrl="src/assets/ImgSections/sports/running.jpg" onClick={handleButtonClick} />
        <CardButton title="YOGA" imageUrl="src/assets/ImgSections/sports/yoga.jpg" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Deportes;
