import MenuItem from "./MenuItem";

const MenuItems = ({ name, meals }) => {
  if (!meals || meals.length === 0) {
    return null;
  }
  return (
    <>
      <div className="menuCategorie">
        <h2>{name}</h2>
        <div className="menuItem">
          {meals.map((elem) => {
            return (
              <MenuItem
                key={elem.id}
                title={elem.title}
                description={elem.description}
                price={elem.price}
                picture={elem.picture}
                popular={elem.popular}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuItems;
