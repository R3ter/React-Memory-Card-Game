import { createContext, useContext, useEffect, useRef, useState } from "react";
import shuffle from "../Functions/Shuffle";
import Cards from "./Cards";

export const SelectedCards = createContext();
export default () => {
  const images = useRef([
    { id: 0, callBack: undefined },
    { id: 0, callBack: undefined },
  ]);
  const setImages = (image, useState) => {
    if (images.current[1].id) {
      if (
        images.current[1].id &&
        images.current[1].id === images.current[0].id
      ) {
        images.current = [
          { id: image, callBack: useState },
          { id: 0, callBack: undefined },
        ];
        return;
      }

      images.current[0].callBack();
      images.current[1].callBack();
      images.current = [
        { id: image, callBack: useState },
        { id: 0, callBack: undefined },
      ];
    } else if (images.current[0].id) {
      images.current = [images.current[0], { id: image, callBack: useState }];
    } else {
      images.current = [
        { id: image, callBack: useState },
        { id: 0, callBack: undefined },
      ];
    }
  };
  const cards = [
    { image: "./CardImages/1.jpg", id: 1 },
    { image: "./CardImages/2.jpg", id: 2 },
    { image: "./CardImages/3.jpg", id: 3 },
    { image: "./CardImages/4.jpg", id: 4 },
    { image: "./CardImages/5.jpg", id: 5 },
    { image: "./CardImages/6.jpg", id: 6 },
    { image: "./CardImages/7.jpg", id: 7 },
    { image: "./CardImages/8.jpg", id: 8 },
    { image: "./CardImages/1.jpg", id: 1 },
    { image: "./CardImages/2.jpg", id: 2 },
    { image: "./CardImages/3.jpg", id: 3 },
    { image: "./CardImages/4.jpg", id: 4 },
    { image: "./CardImages/5.jpg", id: 5 },
    { image: "./CardImages/6.jpg", id: 6 },
    { image: "./CardImages/7.jpg", id: 7 },
    { image: "./CardImages/8.jpg", id: 8 },
  ];
  return (
    <SelectedCards.Provider value={setImages}>
      <div style={{ width: "80vw", height: "80vh", backgroundColor: "black" }}>
        <Cards cards={shuffle(cards)} />
        <h1>{"Selected"}</h1>
      </div>
    </SelectedCards.Provider>
  );
};
