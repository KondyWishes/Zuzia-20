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
        <img src="./svg/years.svg" alt="20 lat" loading="lazy" />
        <Title>🥳🥳🥳</Title>
      </div>
      <Letter>
        11 lat - tyle się już znamy. W tym czasie trochę przeżyliśmy, zwłaszcza
        od ostatniego roku się trochę działo. W tym liściku chciałbym Ci
        podziękować, za to, że zawsze byłaś przy mnie, gdy potrzebowałem pomocy.
        Jesteś mi bliską osobą i absolutnie zawsze mogłem na Ciebie liczyć.
        Jesteś cudowną osobą z dobrym sercem. Wiem, że już Ci to mówiłem parę
        razy, ale chcę, żebyś wiedziała, że na mnie zawsze możesz liczyć. Po tak
        długiej znajomości, nie pozbędziesz się mnie zbyt łatwo. I tego nam
        życzę - aby nasz kontakt przetrwał jak najdłużej. Więc jeszcze raz,
        wełosej dwudziestki i wszystkiego co sobie zażyczysz!🥳
      </Letter>
    </section>
  );
};

export default Summary;
