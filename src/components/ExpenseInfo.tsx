import { useExpenseContext } from "../utils/ExpenseContext";

const ExpenseInfo = () => {
  const { balance, income, expense } = useExpenseContext();

  return (
    <div className="info-container">
      <InfoBox
        data={income}
        title="Income"
        classnames={["info-income", "bg-black"]}
      />
      <InfoBox
        data={expense}
        title="Expense"
        classnames={["info-expense", "bg-black"]}
      />
      <InfoBox
        data={balance}
        title="Balance"
        classnames={["info-balance", "bg-black"]}
      />
    </div>
  );
};

export default ExpenseInfo;

const InfoBox = ({
  title,
  data,
  classnames,
}: {
  title: string;
  data: number;
  classnames: string[];
}) => {
  return (
    <div className={`info-box ${classnames.join(" ")}`}>
      <h3 className="info-title">{title}</h3>
      <h6 className="info-data">{data}</h6>
    </div>
  );
};
