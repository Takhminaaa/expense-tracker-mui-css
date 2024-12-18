import { useState } from "react";
import { NewExpense } from "./components/newExpense/newExpense";
import { EXPENSES } from "./components/utils/constants";
import { Expenses } from "./components/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);
  console.log("expenses: ", expenses);

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  return (
    <>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
