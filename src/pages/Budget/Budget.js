import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchBudget,
  fetchBudgetedCategories,
} from "data/actions/budget.actions";

function Budget({ fetchBudget, fetchBudgetedCategories }) {
  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
  }, [fetchBudget, fetchBudgetedCategories]);
  return <div>Budget Page</div>;
}

// I arg - funkcja, kt pobiera dane ze store i zwraca obiekt, kt zostanie przekazany do propsów komponentu
// II arg - funkcja lub obiekt, z listą akcji, kt będą zdispatchowane
export default connect(
  state => {
    return {
      budget: state.budget.budget,
    };
  },
  {
    fetchBudget,
    fetchBudgetedCategories,
  }
)(Budget);
