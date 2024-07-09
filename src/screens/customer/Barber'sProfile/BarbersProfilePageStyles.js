import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf"; // Correct import for half-filled star
const generateStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating - fullStars >= 0.5; // Check for half star

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={i} />);
  }

  // Half star if applicable
  if (hasHalfStar) {
    stars.push(<StarHalfIcon key="half" />);
  }

  // Empty stars (to make up total of 5)
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<StarBorderIcon key={`empty-${i}`} />);
  }

  return stars;
};

export { generateStars };
export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#1a1a3a",
  color: "white",
  height: "100vh",
//   width: "100vw",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowX: "hidden",
}));

export const CustomAiHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  paddingTop: theme.spacing(0.8),
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  gap: "10px",
  width: "92%",
}));

export const ImageItem = styled(Box)(({ theme }) => ({
  flex: "1 1 20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const RectangleBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "6em",
  height: "4em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const Rectangle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #777",
  width: "11em",
  height: "11em",
  position: "absolute",
  transformOrigin: "center",
  "&:first-of-type": {
    transform: "rotate(0deg)",
  },
  "&:last-of-type": {
    transform: "rotate(85deg)",
  },
}));

export const Logo2 = styled("img")({
  width: "14.5em",
  height: "44em",
  objectFit: "cover",
  position: "relative",
  zIndex: 1,
  marginTop: "3.1em",
  marginBottom: "2.3em",
});
export const Logo = styled("img")({
  width: "22em",
  height: "54em",
  objectFit: "cover",
  position: "relative",
  zIndex: 1,
  marginTop: "0.6em",
  marginBottom: "2.3em",
});
export const BarbeButton = styled(Button)(({ theme }) => ({
  width: "9em",
  height: "2.4em",
  objectFit: "cover",
  borderRadius: "20px",
  position: "absolute",
  zIndex: 1,
  marginTop: "12.6em",
  backgroundColor: "#ffab11",
  color: "#000",
  "&:hover": {
    backgroundColor: "#ffbb21",
  },
}));
export const HeadingBarbes = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  marginTop: "11.6em",
  color: "#FFD700",
  fontSize: "22px",
}));

export const Rating = styled(Box)(({ theme, rating }) => ({
  position: "absolute",
  zIndex: 2,
  marginTop: "14.4em",
  color: "#FFD700",
  fontSize: "22px",
  display: "flex",
  alignItems: "center",

  "& .MuiSvgIcon-root": {
    fontSize: "1.5em", // Adjust star size as needed
  },
}));

export const Quote = styled(Box)(({ theme, rating }) => ({
  textAlign: "auto",
  letterSpacing: "0.4px",
  fontSize: "14px",
  position: "absolute",
  width: "171px",
  marginTop: "31em",
}));
