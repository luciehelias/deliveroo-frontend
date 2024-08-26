import MenuItems from "./MenuItems";

const Content = ({ data }) => {
  return (
    <>
      <section className="content">
        {data.categories.map((elem, index) => {
          return <MenuItems key={index} name={elem.name} meals={elem.meals} />;
        })}
      </section>
    </>
  );
};

export default Content;
