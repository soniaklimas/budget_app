import {
  BUDGET_GET_REQUEST,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_FAILURE,
} from "data/constants";
import API from "data/fetch";

// THUNK - funkcja, która zwraca funkcję, która dopiero coś wykona
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
export const fetchBudget = (id) => async (dispatch) => {
  // 1. dispatch akcję BUDGET_GET_REQUEST
  dispatch({
    type: BUDGET_GET_REQUEST,
  });

  try {
    // 2. wykonać request do API
    const response = await API.budget.fetchBudget(id);
    const data = await response.json();
    // 3. dispatch akcję BUDGET_GET_SUCCESS + przekazać dane z requesta
    dispatch({
      type: BUDGET_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUDGET_GET_FAILURE,
    });
  }

  //
};

const fetchBudgetedCategories = () => {};
