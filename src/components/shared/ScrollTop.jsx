import { Link } from "react-router-dom";

import { Box } from "@mui/material";

const ScrollToTopLink = ({ to, children,linkStyles, ...restProps }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <Box sx={linkStyles}>
      <Link to={to} style={{textDecoration:'none', width:'100%', display:'flex'}} onClick={scrollToTop}  {...restProps}>
        {children}
      </Link>
    </Box>
  );
};

export default ScrollToTopLink;
