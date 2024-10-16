// to add transaction based on the + or - calculate income or expense
// delete transaction and calculate the balance, income, expense again
// calculate total balance
//

import { ACTION_TYPES } from "./constants";
import { Action, IExpense } from "./types";

function ExpenseReducer(state: IExpense, action: Action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case ACTION_TYPES.DELETE_TRANSACTION: {
      return state;
    }

    default:
      return state;
  }
}

export default ExpenseReducer;
