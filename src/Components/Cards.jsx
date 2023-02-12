import Card from "./Card";

export default ({ cards }) => {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {cards.map((e, i) => (
        <Card image={e.image} key={i} />
      ))}
    </div>
  );
};
