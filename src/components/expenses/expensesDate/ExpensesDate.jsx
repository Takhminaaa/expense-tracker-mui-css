export default function ExpensesDate({ date }) {
  const month = date.toLocaleString("ru-Us", { month: "long" });
  const day = date.toLocaleString("ru-Us", { day: "2-digit" });
  const year = date.getFullYear().toString();

  return (
    <div>
      <h2>{month}</h2>
      <h2>{year}</h2>
      <h2>{day}</h2>
    </div>
  );
}
