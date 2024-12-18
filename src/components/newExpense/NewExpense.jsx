import { styled } from "@mui/material";
import { Button } from "../UI/button/Button";
import { useState } from "react";
import { ExpenseForm } from "../expenseForm/expenseForm";

export const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {isFormOpen ? (
        <ExpenseForm handleClick={handleClick} onAddExpense={onAddExpense} />
      ) : (
        <StyledContainer>
          <StyledButton onClick={handleClick}>
            Добавить новый расход
          </StyledButton>
        </StyledContainer>
      )}
    </>
  );
};
const StyledContainer = styled("div")(() => ({
  width: "780px",
  height: "91px",
  backgroundColor: "#AD9BE9",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledButton = styled(Button)(() => ({
  width: "228px",
}));
