import React, { useEffect, useState } from "react";
import FallBackImage from "../assets/FallbackImage.png";

const useImageExists = (imageUrl) => {
  const [imageExists, setImageExists] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setLoading(false);
      setImageExists(true);
    };
    image.onerror = () => {
      setLoading(false);
      setImageExists(false);
    };
  }, [imageUrl]);

  return { imageExists, loading, FallBackImage };
};

export default useImageExists;
