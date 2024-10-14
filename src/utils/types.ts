export interface ITransaction {
  id: string;
  name: string;
  amount: number;
}

export interface IExpense {
  balance: number;
  income: number;
  expense: number;
  history: ITransaction[];
}

export interface IExpenseContext extends IExpense {
  addTransaction: (todo: ITransaction) => void;
  deleteTransaction: (id: string) => void;
}

export type ActionType = {
  type: string;
  payload: object | string;
};
