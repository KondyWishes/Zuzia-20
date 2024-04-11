import "./Memories.css";

const Memories = () => {
  return (
    <section className="memories">
      <div className="memories__header">
        <img src="/images/essa.png" alt="Essa ziomalki" loading="lazy" />
      </div>
      <div className="memories__images">
        <img
          className="memories__img"
          src="/images/na_lodzie.png"
          alt="Na lodzie"
          loading="lazy"
        />
        <img
          className="memories__img"
          src="/images/fakju.png"
          alt="Nieładny palec"
          loading="lazy"
        />
        <img
          className="memories__img"
          src="/images/browar.png"
          alt="Z browarkiem"
          loading="lazy"
        />
        <img
          className="memories__img"
          src="/images/buzi.png"
          alt="Buzi buzi"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Memories;
