export const fetchBudget = (id) => {
  // process.env - dostęp do zmiennej środowiskowej
  // /?embeded = pobierająć budget dostanę budget z transakcjami
  const promise = fetch(
    // `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`
    `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`
  );

  return promise;
};

export const fetchBudgetedCategories = (id) => {
  const promise = fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`
  );

  return promise;
};
