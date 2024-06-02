import "./Memories.css";
import imagesData from "../../data/images.json";

const Memories = () => {
  return (
    <section className="memories">
      <div className="memories__images">
        {imagesData.map((image, index) => {
          const classNames = image.className
            ? `memories__img ${image.className}`
            : "memories__img";
          return (
            <img
              key={index}
              className={classNames}
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className="memories__footer">
        <img
          className="memories__special-img"
          src="./images/buzi.webp"
          alt="Buzi buzi"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Memories;
