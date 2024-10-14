import React, { createContext, useContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";
import { IExpense, IExpenseContext, ITransaction } from "./types";

const initialState: IExpense = {
  balance: 0,
  expense: 540,
  income: 35,
  history: [],
};

export const ExpenseContext = createContext<IExpenseContext | undefined>(
  undefined
);

export const ExpenseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  console.log("state,", state);

  const addTransaction = (transaction: ITransaction) => {
    console.log("add transaction", transaction);
  };

  const deleteTransaction = (id: string) => {
    console.log("delete transaction", id);
  };

  return (
    <ExpenseContext.Provider
      value={{ ...state, deleteTransaction, addTransaction }}
    >
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
