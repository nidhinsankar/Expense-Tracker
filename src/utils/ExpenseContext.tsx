import React, { createContext, useContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";
import { IExpense, IExpenseContext } from "./types";

const initialState: IExpense = {
  balance: 0,
  expense: 540,
  income: 35,
  transactions: [],
};

export const ExpenseContext = createContext<IExpenseContext>({
  balance: initialState.balance,
  expense: initialState.expense,
  income: initialState.income,
  transactions: initialState.transactions,
  dispatch: () => {},
});

export const ExpenseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  console.log("state,", state);

  return (
    <ExpenseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (context === undefined) {
    throw new Error("Expense context is returning undefined");
  }
  return context;
};
