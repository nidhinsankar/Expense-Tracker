import { useExpenseContext } from "../utils/ExpenseContext";

const ExpenseInfo = () => {
  const { balance, income, expense, transactions } = useExpenseContext();

  return (
    <div>
      <h3>balance-{balance}</h3>
      <h3>income-{income}</h3>
      <h3>expense-{expense}</h3>
      <h2>{transactions.length}</h2>
    </div>
  );
};

export default ExpenseInfo;
