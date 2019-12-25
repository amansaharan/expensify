import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/filters';
import expenseReducer from '../reducers/expenses';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filtersReducer
    })
  );
  return store;
};
