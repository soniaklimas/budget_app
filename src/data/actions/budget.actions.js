import { BUDGET_GET, BUDGETED_CATEGORIES_GET } from "data/constants";
import API from "data/fetch";

// THUNK - funkcja, która zwraca funkcję, która dopiero coś wykona
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
export const fetchBudget = (id) => {
  const promise = API.budget.fetchBudget(id);
  // aby dotrzec do middlewara trzeba zdispatchowac akcję
  return {
    type: BUDGET_GET,
    promise,
  };
};

export const fetchBudgetedCategories = (id) => {
  const promise = API.budget.fetchBudgetedCategories(id);
  return {
    type: BUDGETED_CATEGORIES_GET,
    promise,
  };
};
