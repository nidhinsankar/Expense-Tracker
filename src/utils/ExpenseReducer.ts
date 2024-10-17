// to add transaction based on the + or - calculate income or expense
// delete transaction and calculate the balance, income, expense again
// calculate total balance
//

import { ACTION_TYPES } from "./constants";
import { Action, IExpense, ITransaction } from "./types";

function ExpenseReducer(state: IExpense, action: Action): IExpense {
  switch (action.type) {
    case ACTION_TYPES.ADD_TRANSACTION:
      let newState = {
        ...state,
        transactions: [...state.transactions, action.payload as ITransaction],
      };
      // let { balance, expense, income, transactions } = newState;
      let income_total = 0;
      let expense_total = 0;
      let balance_total = 0;
      for (let i = 0; i < newState.transactions.length; i++) {
        balance_total += newState.transactions[i].amount;
        if (newState.transactions[i].amount > 0) {
          income_total += newState.transactions[i].amount;
        } else {
          expense_total += newState.transactions[i].amount;
        }
      }
      return {
        ...state,
        income: income_total,
        expense: expense_total,
        balance: balance_total,
        transactions: newState.transactions,
      };

    case ACTION_TYPES.DELETE_TRANSACTION: {
      let newState = {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
      // let { balance, expense, income, transactions } = newState;
      let income_total = 0;
      let expense_total = 0;
      let balance_total = 0;
      for (let i = 0; i < newState.transactions.length; i++) {
        balance_total += newState.transactions[i].amount;
        if (state.transactions[i].amount > 0) {
          income_total += newState.transactions[i].amount;
        } else {
          expense_total += newState.transactions[i].amount;
        }
      }
      return {
        ...state,
        income: income_total,
        expense: expense_total,
        balance: balance_total,
        transactions: newState.transactions,
      };
    }

    default:
      return state;
  }
}

export default ExpenseReducer;
