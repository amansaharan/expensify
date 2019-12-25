store.subscribe(() => {
  const state = store.getState();
  const getVisibleExpenses = visibleExpenses(state.expenses, state.filters);
  console.log(getVisibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: 'Coffee',
    amount: 500,
    createdAt: 1000
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 800,
    createdAt: -2000
  })
);

// store.dispatch(
//   removeExpense({
//     id: expenseOne.expense.id
//   })
// );
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));

store.dispatch(setTextFilter('fe'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
