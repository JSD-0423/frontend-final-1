import { Box } from "@mui/material";

function SocialIcon({ src, alt, isMUIIcon, style }) {
  if (isMUIIcon) {
    const IconComponent = src;
    return (
      <IconComponent
        sx={{
          width: "34px",
          paddingTop: "6px",
          paddingBottom: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
          backgroundColor: "primaryTint.main",
          color: "primary.main",
          borderRadius: "50%",
          height: "2rem",
        }}
      />
    );
  }

  return (
    <Box sx={{ borderRadius: "50%", backgroundColor: "primaryTint.main" }}>
      <img src={src} alt={alt} style={{ fill: "primary.main", ...style }} />
    </Box>
  );
}

export default SocialIcon;
