import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { CustomContainer } from "../index.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductTabs = () => {
  const productInfo = [
    {
      id: 0,
      title: "Product Description",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 

            Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 

            Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.`,
    },
    {
      id: 1,
      title: "Related Products",
      description: `Rem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 

            Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 

            Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.`,
    },
    {
      id: 2,
      title: "Rating and Reviews",
      description: `Oem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 

            Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 

            Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.`,
    },
  ];
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isSmallScreen) {
    return (
      <CustomContainer>
        {productInfo.map(({ id, title, description }) => (
          <Accordion
            key={id}
            expanded={value === id}
            onChange={(event, expanded) => {
              setValue(expanded ? id : -1);
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${id}-content`}
              id={`panel${id}-header`}
            >
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CustomContainer>
    );
  }

  return (
    <CustomContainer>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "grey.main",
          borderRadius: "12px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ paddingLeft: "12px" }}
        >
          {productInfo.map(({ id, title }) => (
            <Tab
              label={title}
              index={id}
              key={id}
              sx={{
                color: "typeLowEmphasis.main",
                textTransform: "none",
                height: "30px",
                marginRight: "20px",
                fontSize: "16px",
                "&.Mui-selected": {
                  color: "bright.main",
                  backgroundColor: "primary.main",
                  minHeight: "0px",
                  borderRadius: "8px",
                  borderBottom: "0px",
                  justifyContent: "center",
                  alignSelf: "center",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {productInfo.map(({ id, description }) => (
        <CustomTabPanel value={value} index={id} key={id}>
          {description}
        </CustomTabPanel>
      ))}
    </CustomContainer>
  );
};

export default ProductTabs;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={index} {...other}>
      {value === index && (
        <Box
          sx={{
            p: 3,
            paddingLeft: "0px",
            color: "typeLowEmphasis.main",
            whiteSpace: "pre-line",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
