import { useEffect, useState } from "react";

// This custom hook allow me to manipulate jsx condtionally with user's sreen width
const useInnerWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth !== width) {
        setWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [width]);

  return width;
};

export default useInnerWidth;
