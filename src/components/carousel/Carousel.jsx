import * as React from "react";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Carousel({ images, location }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map(({ imgPath, element }, index) => (
        <SwiperSlide key={index}>
          <Box
            component="img"
            src={imgPath}
            sx={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "20px",
              height:location ==='product-details' && "100%" || ["135px", "260px", "400px"],
            }}
          />
          {element && element}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
