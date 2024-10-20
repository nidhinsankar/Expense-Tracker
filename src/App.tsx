import AddTransaction from "./components/AddTransaction";
import ExpenseInfo from "./components/ExpenseInfo";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="container">
      <h1>Expense tracker</h1>
      <ExpenseInfo />

      <TransactionList />

      <AddTransaction />
    </div>
  );
}

export default App;
