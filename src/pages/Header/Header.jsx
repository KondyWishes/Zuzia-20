import Title from "../../components/Title/Title";
import "./Header.css";

const Header = () => {
  return (
    <header className="header section">
      <img
        className="header__img"
        src="/svg/cake.svg"
        alt="Tort urodzinowy"
        loading="lazy"
      />
      <div className="header__title">
        <Title mainTitle={true}>Wesołej Dwudziestki!</Title>
      </div>
    </header>
  );
};

export default Header;
