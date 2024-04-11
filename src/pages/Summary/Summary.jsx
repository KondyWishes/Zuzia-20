import Description from "../../components/Description/Description";
import Title from "../../components/Title/Title";
import "./Summary.css";

const Summary = () => {
  return (
    <section className="summary">
      <Description>
        Nie miałem zbyt wiele zdjęć czy filmów, żeby wrzucić tutaj, więc z tego
        co miałem, to stwierdziłem, że zmontuje się jeszcze jakiś krótki filmik.
      </Description>

      <div className="summary__img">
        <img src="/svg/years.svg" alt="20 lat" loading="lazy" />
        <Title>🥳🥳🥳</Title>
      </div>
    </section>
  );
};

export default Summary;
