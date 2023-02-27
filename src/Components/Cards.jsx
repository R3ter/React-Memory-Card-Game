import Card from "./Card";

export default ({ cards }) => {
  return (
    <div
      style={{
        display: "grid",
        gap: 10,
        width: "100%",
        height: "100%",
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {cards.map((e, i) => (
        <Card image={e.image} id={e.id} key={i} />
      ))}
    </div>
  );
};
