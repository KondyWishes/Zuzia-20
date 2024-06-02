import Description from "../../components/Description/Description";
import Title from "../../components/Title/Title";
import "./Wishes.css";

const Wishes = () => {
  return (
    <section className="wishes">
      <div className="wishes__title">
        <Title>Gratulacje!</Title>
        <img
          className="wishes__special-img"
          src="./images/wishes.webp"
          alt="Essa ziomalki"
          loading="lazy"
        />
        <Title isTitle={false}>Przeżyłaś już dwie dekady!</Title>
      </div>
      <div className="wishes__description">
        <Description>
          Na początek to chciałbym, tak klasycznie, życzyć dużo szczęścia, kasy
          i przede wszystkim dużo zdrowia.
        </Description>
        <Description>
          Znamy się już kawał czasu i stwierdziłem, że z tej okazji, na tak
          symboliczne urodziny, muszę coś zrobić zajebistego, ale nie miałem
          pomysłu, więc zrobiłem to.
        </Description>
        <Description>
          Zebrałem parę zdjęć i filmików, i umieściłem je tutaj na stronie. Mam
          nadzieję, że taki prezencik się spodoba.
          <br />
          Więc no, miłego seansu.
        </Description>
      </div>
    </section>
  );
};

export default Wishes;
