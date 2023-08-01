import React, { useState } from "react";
import { Box, Button, Stack, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantityCounter = () => {
  const [quantityCount, setQuantityCount] = useState(1);

  const theme = useTheme();

  const handleIncrement = () => {
    setQuantityCount(quantityCount + 1);
  };

  const handleDecrement = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "fit-content",
        padding: "1px",
      }}
    >
      <Stack
        direction="row"
        border={`1px solid ${theme.palette.primary.main}`}
        borderRadius="4px"
      >
        <Button
          onClick={handleDecrement}
          sx={{ minWidth: "0", padding: "4px" }}
        >
          <RemoveIcon sx={{ fontSize: "18px", color: "black" }} />
        </Button>
        <span style={{ fontSize: "14px", marginTop: "4px" }}>
          {quantityCount}
        </span>
        <Button
          onClick={handleIncrement}
          sx={{ minWidth: "0", padding: "4px" }}
        >
          <AddIcon sx={{ fontSize: "18px", color: "black" }} />
        </Button>
      </Stack>
    </Box>
  );
};
export default QuantityCounter;
