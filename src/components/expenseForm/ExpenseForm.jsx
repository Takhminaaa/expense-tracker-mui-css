import { styled } from "@mui/material";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import { useState } from "react";

export const ExpenseForm = ({ handleClick, onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleNewExpense = () => {
    if (!title || !amount || !date) {
      alert("Please enter a new expense");
      return;
    }
    const newExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
      id: Date.now().toString(),
    };
    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <StyledContainer onSubmit={handleSubmit}>
      <StyledContainerInput>
        <StyledWrapper>
          <label>Заголовок</label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </StyledWrapper>
        <StyledWrapper>
          <label>Количество</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </StyledWrapper>
        <StyledWrapper>
          <label>Датировать</label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </StyledWrapper>
      </StyledContainerInput>
      <StyledCOntainerBtn>
        <StyledButton onClick={() => handleClick()}>Отмена</StyledButton>
        <StyledBtn onClick={handleNewExpense}>Добавить расходы</StyledBtn>
      </StyledCOntainerBtn>
    </StyledContainer>
  );
};
const StyledCOntainerBtn = styled("section")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "14px",
  paddingRight: "30px",
}));
const StyledContainer = styled("form")(() => ({
  backgroundColor: "#AD9BE9",
  width: "780px",
  height: "287px",
  borderRadius: "12px",
}));
const StyledWrapper = styled("div")(() => ({
  width: "340px",
  height: "64px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));
const StyledContainerInput = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  padding: "30px 40px",
  gap: "20px",
}));

const StyledButton = styled(Button)(() => ({
  width: "97px",
}));
const StyledBtn = styled(Button)(() => ({
  width: "186px",
}));
