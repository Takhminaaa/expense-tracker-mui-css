import { styled } from "@mui/material";

export const ExpensesFilter = ({ value, onChange }) => {
  return (
    <StyledExpensesFilter>
      <StyledExpensesFilterControl>
        <StyledFilterLable>Filter by year</StyledFilterLable>
        <StyledExpensesFilterSeleect value={value} onChange={onChange}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </StyledExpensesFilterSeleect>
      </StyledExpensesFilterControl>
    </StyledExpensesFilter>
  );
};
const StyledExpensesFilter = styled("div")(() => ({
  color: "white",
  padding: "0 1rem",
}));
const StyledExpensesFilterControl = styled("div")(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "1rem 0",
}));
const StyledExpensesFilterSeleect = styled("select")(() => ({
  font: "inherit",
  padding: "0.5rem 2rem ",
  fontWeight: "bold",
  borderRadius: "6px",
}));
const StyledFilterLable = styled("label")(() => ({
  fontWeight: "bold",
  marginBottom: "0.5rem",
}));
