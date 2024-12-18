import { Button as MuiButton, styled } from "@mui/material";

export const Button = ({ onClick, type, children, disabled, ...props }) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled(MuiButton)(() => ({
  width: "91px",
  height: "51px",
  backgroundColor: "#4A026B",
  borderRadius: "10px",
  color: "#FFFFFF",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "#600A87",
  },
  "& active": {
    backgroundColor: "#520B73",
  },
}));
