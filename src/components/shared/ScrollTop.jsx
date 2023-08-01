import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, children, ...restProps }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <Link to={to} onClick={scrollToTop} {...restProps}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
