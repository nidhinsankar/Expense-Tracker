import React from "react";
import { ACTION_TYPES } from "./constants";

export interface ITransaction {
  id: string;
  name: string;
  amount: number;
}

export interface IExpense {
  balance: number;
  income: number;
  expense: number;
  transactions: ITransaction[];
}

export type Action =
  | { type: "ADD_TRANSACTION"; payload: ITransaction }
  | { type: "DELETE_TRANSACTION"; payload: string };

export interface IExpenseContext extends IExpense {
  dispatch: React.Dispatch<Action>;
}

// export type ActionType = {
//   type: string;
//   payload: object | string;
// };
