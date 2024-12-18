import { useState } from "react";
import { Card } from "../UI/card/Card";
import { ExpenseList } from "./ExpenseList";
import { ExpensesFilter } from "./expensesFilter/ExpensesFilter";
import { Chart } from "../chart/Chart";

export const Expenses = ({ expenses }) => {
  const [filteredByYear, setFiltredByYear] = useState("2023");

  const handleSelected = (event) => {
    setFiltredByYear(event.target.value);
  };
  const filtredExpenses = expenses.filter((item) => {
    let year = item.date.getFullYear().toString();
    return year === filteredByYear;
  });
  return (
    <Card>
      <ExpensesFilter value={filteredByYear} onChange={handleSelected} />
      <Chart expensess={filtredExpenses} />
      <ExpenseList expenses={filtredExpenses} />
    </Card>
  );
};
