import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel({ images }) {
  return (
    <>
      <AutoPlaySwipeableViews>
        {images.map(({ imgPath, element }, index) => (
          <div key={index}>
            <Box
              component="img"
              src={imgPath}
              sx={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "20px",
                height: ["135px", "260px", "400px"],
              }}
            />
            {element && element}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </>
  );
}

export default Carousel;
