import { useContext, useState } from "react";
import { SelectedCards } from "./Game";

export default ({ image, id }) => {
  const selectImage = useContext(SelectedCards);
  const [currImage, setImage] = useState("./CardImages/placeHolder.jpg");
  return (
    <div
      onClick={() => {
        setImage(image);
        selectImage(id, () => {
          setImage("./CardImages/placeHolder.jpg");
        });
      }}
      style={{
        backgroundImage: "url(" + currImage + ")",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: "100%",
        backgroundColor: "white",
      }}
    ></div>
  );
};
