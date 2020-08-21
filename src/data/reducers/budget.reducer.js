// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

import {
  BUDGET_GET,
  BUDGET_GET_REQUEST,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_FAILURE,
  LOADING_STATES,
  BUDGETED_CATEGORIES_GET,
  BUDGETED_CATEGORIES_GET_REQUEST,
  BUDGETED_CATEGORIES_GET_SUCCESS,
  BUDGETED_CATEGORIES_GET_FAILURE,
} from "data/constants";

const initialState = {
  loadingState: {
    // obiekt ładowania stanów w reducerze
  },
  budget: {},
  budgetedCategories: [],
};

function budget(state = initialState, action) {
  // nowa kopia obiektu state ze state, nie mutujemy a zwracamy nowe obiekty = nowy obiekt = brak referencji
  const newLoadingState = { ...state.loadingState };
  switch (action.type) {
    case BUDGET_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case BUDGET_GET_FAILURE:
      delete newLoadingState.BUDGET_GET_REQUEST;
      return {
        ...state,
        budget: [],
        loadingState: newLoadingState,
      };

    case BUDGET_GET_SUCCESS:
      delete newLoadingState.BUDGET_GET_REQUEST;
      return {
        ...state,
        budget: action.payload,
        loadingState: newLoadingState,
      };
    default:
      return state;

    case BUDGETED_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case BUDGETED_CATEGORIES_GET_FAILURE:
      delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;

      return {
        ...state,
        budgetedCategories: [],
        loadingState: newLoadingState,
      };

    case BUDGETED_CATEGORIES_GET_SUCCESS:
      delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;

      return {
        ...state,
        budgetedCategories: action.payload,
        loadingState: newLoadingState,
      };
  }
}

export default budget;
