import MenuItems from "./MenuItems";

const Content = ({ data }) => {
  return (
    <>
      <section className="content">
        {data.categories.map((elem) => {
          return <MenuItems name={elem.name} />;
        })}
      </section>
    </>
  );
};

export default Content;
