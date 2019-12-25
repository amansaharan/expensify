export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(singleItem => action.id !== singleItem.id);
    case 'EDIT_EXPENSE':
      return state.map(singleItem => {
        if (singleItem.id === action.id) {
          return {
            ...singleItem,
            ...action.updates
          };
        } else {
          return singleItem;
        }
      });
    default:
      return state;
  }
};
