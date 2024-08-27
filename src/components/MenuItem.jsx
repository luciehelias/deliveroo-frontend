import React, { useState } from "react";

const MenuItem = ({ title, description, price, picture, popular }) => {
  const [imageExists, setImageExists] = useState(true);

  const handleError = () => {
    setImageExists(false);
  };

  return (
    <>
      <div className="menu">
        <div className="menuText">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="menuTextDetails">
            <span className="price">{price} €</span>
            {popular && (
              <div>
                <i className="icon-STAR_FILL"> </i>
                <span className="popular"> Populaire</span>
              </div>
            )}
          </div>
        </div>
        {imageExists && picture && (
          <div className="menuImage">
            <img src={picture} alt="image meal" onError={handleError} />
          </div>
        )}
      </div>
    </>
  );
};

export default MenuItem;
