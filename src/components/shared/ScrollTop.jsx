import { Link } from "react-router-dom";

import { Box } from "@mui/material";
import styles from './ScrollTop.module.css'

const ScrollToTopLink = ({ to, children,linkStyles, ...restProps }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <Box sx={linkStyles}>
      <Link to={to} className={styles.ScrolltoTopLink} style={{width:'100%', display:'flex', justifyContent:'center'}} onClick={scrollToTop}  {...restProps}>
        {children}
      </Link>
    </Box>
  );
};

export default ScrollToTopLink;
