import { ExpensesItem } from "./ExpensesItem";

export const ExpenseList = ({ expenses }) => {
  console.log("expenses: ", expenses);
  return (
    <div>
      {expenses.map((item) => (
        <ExpensesItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};
