import { styled } from "@mui/material";
import ExpensesDate from "./expensesDate/ExpensesDate";

export const ExpensesItem = ({ title, amount, date }) => {
  return (
    <StyledExpenseItem>
      <StyledContainerDate>
        <StyledDate>
          <ExpensesDate date={date} />
        </StyledDate>
        <h2>{title}</h2>
      </StyledContainerDate>

      <StyledExpenseItemDes>
        <ExpenseItemPrice>${amount}</ExpenseItemPrice>
      </StyledExpenseItemDes>
    </StyledExpenseItem>
  );
};
const StyledDate = styled("div")(() => ({
  width: "84px",
  height: "80px",
  backgroundColor: "#2A2A2A",
  padding: "10px 20px",
  borderRadius: "10px",
  border: "1px solid white",
}));
const StyledExpenseItem = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  margin: "1rem 0.5rem ",
  borderRadius: "12px",
  backgroundColor: "#4b4b4b",
  "& h2": {
    color: "#3a3a3a",
    fontSize: "1rem",
    flex: 1,
    margin: "0.1rem",
    color: "white",
  },
}));
const StyledExpenseItemDes = styled("div")(() => ({
  display: "flex",
  gap: "1rem",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  flex: 1,
}));
const StyledContainerDate = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));
const ExpenseItemPrice = styled("div")(() => ({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#40005d",
  border: "1px solid white",
  padding: "0.7rem 1rem",
  borderRadius: "12px",
}));
