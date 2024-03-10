import hero from "assets/hero.jpg";
import "./styles.scss";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <img className="hero__img" src={hero} alt="Hero img" />
        <div className="hero__text-content">
          <h1 className="hero__title">
            <span className="hero__title_str hero__title_str-1">
              ПРОСТРАНСТВО
            </span>
            <span className="hero__title_str hero__title_str-2">
              ФОРМИРУЕТ СОЗНАНИЕ
            </span>
          </h1>
          <div>Создаем среду, комфортную для жизни</div>
          <button>Свяжитесь с нами</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
