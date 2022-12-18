import React, { useState, useEffect, useRef } from "react";

const BannerCarousel = () => {
  const [current_bg_index, setCurrentBgIndex] = useState(0);

  let background_images = [
    "https://wallpaperaccess.com/full/2950659.jpg",
    "https://images2.alphacoders.com/694/thumb-1920-694497.jpg",

    "https://images8.alphacoders.com/576/576872.jpg",
    "https://images2.alphacoders.com/674/thumb-1920-674610.jpg",
    "https://images8.alphacoders.com/118/1185547.jpg",
  ];

  useEffect(() => {
    let intv = setInterval(
      () =>
        setCurrentBgIndex(
          (current_bg_index) => ++current_bg_index % background_images.length
        ),
      2500
    );

    return () => {
      clearInterval(intv);
    };
  }, []);
  return (
    <div
      className="bg-cover bg-center w-screen h-screen absolute top-0 left-0 z-10 transition-all  duration-500"
      style={{
        backgroundImage: `url('${background_images[current_bg_index]}')`,
      }}
    ></div>
  );
};

export default BannerCarousel;
