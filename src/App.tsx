import { useExpenseContext } from "./utils/ExpenseContext";

function App() {
  const { balance, income, expense, history } = useExpenseContext();
  return (
    <>
      <div>Expense tracker</div>
      <div>
        <h3>{balance}</h3>
        <h3>{income}</h3>
        <h3>{expense}</h3>
        <h2>{history.length}</h2>
        <h2>Balance</h2>
        <h3>434</h3>
      </div>
      <div>
        <p>Income : 100</p>
        <p>Expense : 300</p>
      </div>
      <div>
        <div>salary: 500</div>
        <div>rent : 200</div>
        <div>Grocery : 100</div>
      </div>
      <button>Add</button>

      <div>
        <input type="text" placeholder="transaction name" />
        <input type="number" placeholder="Type the Amount" />
      </div>
    </>
  );
}

export default App;
