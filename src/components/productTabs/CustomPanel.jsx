import { Box, Typography } from "@mui/material";

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
export default CustomTabPanel;
