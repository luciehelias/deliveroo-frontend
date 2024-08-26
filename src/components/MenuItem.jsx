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
          <span>{price} €</span>
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
