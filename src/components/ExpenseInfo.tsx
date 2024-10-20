import { useExpenseContext } from "../utils/ExpenseContext";

const ExpenseInfo = () => {
  const { balance, income, expense } = useExpenseContext();

  return (
    <div className="info-container">
      <InfoBox data={balance} title="Balance" />
      <InfoBox data={income} title="Income" />
      <InfoBox data={expense} title="Expense" />
    </div>
  );
};

export default ExpenseInfo;

const InfoBox = ({ title, data }: { title: string; data: number }) => {
  return (
    <div className="info-box">
      <h3 className="info-title">{title}</h3>
      <h6 className="info-data">{data}</h6>
    </div>
  );
};
