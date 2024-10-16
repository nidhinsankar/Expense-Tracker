import { useExpenseContext } from "./utils/ExpenseContext";
import { ITransaction } from "./utils/types";

function App() {
  const { balance, income, expense, transactions, dispatch } =
    useExpenseContext();

  const onSubmit = () => {
    const transaction: ITransaction = {
      id: "1",
      name: "first one",
      amount: 334,
    };
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const onDelete = () => {
    dispatch({ type: "DELETE_TRANSACTION", payload: "2" });
  };
  return (
    <>
      <div>Expense tracker</div>
      <div>
        <h3>{balance}</h3>
        <h3>{income}</h3>
        <h3>{expense}</h3>
        <h2>{transactions.length}</h2>
        <h2>Balance</h2>
        <h3>434</h3>
      </div>
      <div>
        {transactions.map((trans) => (
          <div key={trans.id}>
            {trans.name} -- {trans.amount}
          </div>
        ))}
        <p>Income : 100</p>
        <p>Expense : 300</p>
      </div>
      <div>
        <div>salary: 500</div>
        <div>rent : 200</div>
        <div>Grocery : 100</div>
      </div>
      <button onClick={() => onSubmit()}>Add</button>

      <div>
        <input type="text" placeholder="transaction name" />
        <input type="number" placeholder="Type the Amount" />
      </div>
    </>
  );
}

export default App;
