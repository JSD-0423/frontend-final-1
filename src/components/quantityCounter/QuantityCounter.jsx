import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, useTheme } from "@mui/material";

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
        border: `1px solid ${theme.palette.primary.main}`,
        width: "fit-content",
        borderRadius: "4px",
        padding: "1px",
      }}
    >
      <Button onClick={handleDecrement} sx={{ minWidth: "0", padding: "4px" }}>
        <RemoveIcon sx={{ fontSize: "18px", color: "black" }} />
      </Button>
      <span style={{ fontSize: "14px", marginTop: "4px" }}>
        {quantityCount}
      </span>
      <Button onClick={handleIncrement} sx={{ minWidth: "0", padding: "4px" }}>
        <AddIcon sx={{ fontSize: "18px", color: "black" }} />
      </Button>
    </Box>
  );
};
export default QuantityCounter;
