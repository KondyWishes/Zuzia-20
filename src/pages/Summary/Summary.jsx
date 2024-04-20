import Description from "../../components/Description/Description";
import Letter from "../../components/Letter/Letter";
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
      <Letter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore
        similique, possimus quasi ea officiis nobis expedita cumque eligendi
        explicabo nesciunt laborum laboriosam eum accusantium non impedit fugit
        asperiores consequatur!
      </Letter>
    </section>
  );
};

export default Summary;
