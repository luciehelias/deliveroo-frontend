import logo from "../assets/images/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <>
      <section className="header">
        <div className="topHeader">
          <img src={logo} alt="logo deliveroo" />
        </div>
        <div className="restaurantInfos">
          <div className="restaurantTexts">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img src={data.restaurant.picture} alt="photo restaurant" />
        </div>
      </section>
    </>
  );
};
export default Header;
