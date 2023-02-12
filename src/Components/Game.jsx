import Cards from "./Cards";

export default () => {
  return (
    <div style={{ width: "80vw", height: "80vh", backgroundColor: "black" }}>
      <Cards cards={[{ image: "./CardImages/1.jpg" }]} />
    </div>
  );
};
