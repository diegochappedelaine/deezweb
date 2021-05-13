import { useEffect, useState } from "react";

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
