import { scroller } from "react-scroll";

const scrollToView = (name: string) =>
  scroller.scrollTo(name, {
    duration: 1000,
    delay: 300,
    smooth: true,
  });

export default scrollToView;
