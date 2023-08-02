import React, { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Typography, useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { BreadCrumbsContext } from "../../context/BreadCrumbsContext";
import { CustomContainer } from "./index";

const CustomBreadcrumbs = ({ isSearching }) => {
  const theme = useTheme();
  const location = useLocation();
  const { pagesState, setPagesState } = useContext(BreadCrumbsContext);
  const {id} = useParams();
  const handleLinkClick = (page) => {
    const pageIndex = pagesState.indexOf(page);
    setPagesState(pagesState.slice(0, pageIndex + 1));
  };

  useEffect(() => {
    let crumbs = location.pathname.split("/").filter((crumb) => crumb);
    if (!pagesState.includes(crumbs[0]) && crumbs.length >= 1) {
      setPagesState([...pagesState, crumbs[0]]);
    }
  }, [location]);

  return (
    <CustomContainer>
      {isSearching ? (
        <Typography
          variant="h1"
          fontSize={["15px", "34px"]}
          fontWeight="600"
          color="primary.main"
          mb={[5, 3]}
        >
          Search Results
        </Typography>
      ) : (
        <Box
          component="div"
          mb={{ xs: 1, md: 5 }}
          display={pagesState.length > 1 ? "block" : "none"}
        >
          <Breadcrumbs
            separator={
              <ChevronRightIcon sx={{ color: theme.palette.dark.main }} />
            }
            aria-label="breadcrumb"
          >
            {pagesState.map((page, index) => {
              return (
                pagesState.length !== 1 &&
                index !== pagesState.length - 1 && (
                  <Link
                    onClick={() => {
                      handleLinkClick(page);
                    }}
                    key={(page === "/" && "home") || page}
                    to={page === 'product-details' ? `/product-details/${id}` : page }
                    style={{
                      textDecoration: "none",
                      color: theme.palette.dark.main,
                      "&:visited": {
                        color: theme.palette.primary.main,
                      },
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {(page === "/" && "Home") || page}
                  </Link>
                )
              );
            })}
            <Typography color={theme.palette.dark.main}>
              {pagesState[pagesState.length - 1]}
            </Typography>
          </Breadcrumbs>
        </Box>
      )}
    </CustomContainer>
  );
};

export default CustomBreadcrumbs;
