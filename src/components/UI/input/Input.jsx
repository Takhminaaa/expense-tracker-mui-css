import { styled, TextField } from "@mui/material";

export const Input = ({
  value,
  onChange,
  placeholder,
  disabled,
  error,
  type,
  ...props
}) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      type={type}
      disabled={disabled}
    />
  );
};
const StyledInput = styled(TextField)(({ error, disabled }) => ({
  border: `1px solid ${error ? "#F91515" : disabled ? "#E0E0E0" : "none"}`,

  width: "340px",
  height: "39px",
  color: "#959595",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  padding: "8px",

  "&:active": {
    border: `1px solid ${error ? "#F91515" : disabled ? "#E0E0E0" : "#3F3F3F"}`,
    color: "#4D4E51",
  },
  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
      WebkitTransitionDelay: "9999s",
    },
  "& fieldset": { border: "none" },

  "input[type='search']::-webkit-search-cancel-button": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    border: "none",
    padding: "0px",
  },
}));
