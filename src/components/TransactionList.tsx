import { useExpenseContext } from "../utils/ExpenseContext";

const TransactionList = () => {
  const { transactions, dispatch } = useExpenseContext();

  const onDelete = (id: string) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <div>
      {transactions.map((trans) => (
        <div key={trans.id}>
          {trans.name} -- {trans.amount} - {trans.id}
          <button onClick={() => onDelete(trans.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default TransactionList;
