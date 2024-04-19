import Description from "../../components/Description/Description";
import Title from "../../components/Title/Title";
import "./Summary.css";

const Summary = () => {
  return (
    <section className="summary">
      <Description>
        Żeby ta stronka nie była zbyt pusta to zmontowałem jeszcze krótki
        filmik, tak o na zakończenie. Jeszcze raz - Wszystkiego Najlepszego! 🥳
      </Description>

      <div className="summary__img">
        <img src="/svg/years.svg" alt="20 lat" loading="lazy" />
        <Title>🥳🥳🥳</Title>
      </div>
    </section>
  );
};

export default Summary;
