import { ChangeEvent, useState } from "react";
import { ITransaction } from "../utils/types";
import { useExpenseContext } from "../utils/ExpenseContext";

const AddTransaction = () => {
  const [transactionInfo, setTransactionInfo] = useState({
    transaction_name: "",
    amount: 0,
  });
  const { dispatch } = useExpenseContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTransactionInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onSubmit = () => {
    if (
      transactionInfo.amount === 0 ||
      transactionInfo.transaction_name === ""
    ) {
      alert("input fields are empty");
      return;
    }
    const transaction: ITransaction = {
      id: String(Math.random() * 15434323),
      name: transactionInfo.transaction_name,
      amount: Number(transactionInfo.amount),
    };
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    setTransactionInfo({ amount: 0, transaction_name: "" });
  };
  return (
    <div className="add-transaction">
      <input
        type="text"
        placeholder="transaction name"
        id="transaction_name"
        value={transactionInfo.transaction_name}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Type the Amount"
        id="amount"
        onChange={onChange}
        value={transactionInfo.amount}
      />
      <button onClick={onSubmit} className="submit-btn">
        ADD
      </button>
    </div>
  );
};

export default AddTransaction;
