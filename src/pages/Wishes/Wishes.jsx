import Description from "../../components/Description/Description";
import Title from "../../components/Title/Title";
import "./Wishes.css";

const Wishes = () => {
  return (
    <section className="wishes">
      <Title>Gratulacje!</Title>
      <Title isTitle={false}>Przeżyłaś już dwie dekady!</Title>
      <div className="wishes__description">
        <Description>
          Na początek to chciałbym, tak klasycznie, życzyć dużo szczęścia, kasy
          i czego tam sobie chcesz.
        </Description>
        <Description>
          Znamy się już kawał czasu i stwierdziłem, że z tej okazji, na tak
          symboliczne urodziny, muszę coś zrobić zajebistego, ale nie miałem
          pomysłu, więc zrobiłem to.
        </Description>
        <Description>
          Trochę się postarałem i przygotowałem pare zdjęć i filmików, tak o
          żeby powspominać.
          <br />
          Więc no, miłego seansu.
        </Description>
      </div>
    </section>
  );
};

export default Wishes;
