export default ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + image + ")",
        width: "100%",
        height: "100%",
        backgroundColor: "red",
      }}
    ></div>
  );
};
