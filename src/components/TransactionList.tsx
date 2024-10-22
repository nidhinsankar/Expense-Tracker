import { useExpenseContext } from "../utils/ExpenseContext";

const TransactionList = () => {
  const { transactions } = useExpenseContext();

  return (
    <div className="transaction-container">
      {transactions?.length === 0 ? (
        <div className="empty-list">List is empty</div>
      ) : (
        transactions.map((trans) => (
          <TransactionItem
            key={trans.id}
            name={trans.name}
            amount={trans.amount}
            id={trans.id}
          />
        ))
      )}
    </div>
  );
};
export default TransactionList;

const TransactionItem = ({
  name,
  amount,
  id,
}: {
  name: string;
  amount: number;
  id: string;
}) => {
  const { dispatch } = useExpenseContext();
  const onDelete = (id: string) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  return (
    <div
      className={`transaction-item ${
        amount > 0 ? "income-transaction" : "expense-transaction"
      }`}
    >
      <h2>{name}</h2>
      <div className="amount-info">
        <h4>{amount}</h4>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};
