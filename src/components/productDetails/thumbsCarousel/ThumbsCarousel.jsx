import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./style.module.css";

function ThumbCarousel({ productImages }) {
  const thumbsSwiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={true}
        style={{
          "--swiper-navigation-color": "typeHighEmphasis.main",
        }}
        className={styles.mainSwiper}
        onSwiper={() => setSwiperReady(true)}
      >
        {productImages.map(({ image, id }) => (
          <SwiperSlide key={id}>
            <img
              src={image}
              className={styles.swiperImage}
              alt={`${id} image `}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {swiperReady && (
        <Swiper
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={true}
          spaceBetween={15}
          style={{
            "--swiper-navigation-color": "typeHighEmphasis.main",
          }}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className={styles.mySwiper}
        >
          {productImages.map(({ image, id }) => (
            <SwiperSlide className={styles.swiperSlide} key={id}>
              <img src={image} className={styles.thumbImg} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default ThumbCarousel;
