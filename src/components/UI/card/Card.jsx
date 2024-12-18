import { styled } from "@mui/material";

export const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
const StyledCard = styled("div")(() => ({
  borderRadius: "12px",
  padding: "30px",
  backgroundColor: "#1F1F1F",
  marginTop: "20px",
}));
