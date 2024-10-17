import AddTransaction from "./components/AddTransaction";
import ExpenseInfo from "./components/ExpenseInfo";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <div>Expense tracker</div>
      <ExpenseInfo />

      <TransactionList />

      <AddTransaction />
    </>
  );
}

export default App;
