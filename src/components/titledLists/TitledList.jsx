import React from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function TitledList({ title, list }) {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.bright.main }}
      >
        {title}
      </Typography>
      <List>
        {list.map((item, index) => (
          <ListItem key={index} sx={{ padding: "0" }}>
            <ListItemText
              primary={item}
              sx={{
                color: theme.palette.lightText.main,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TitledList;
