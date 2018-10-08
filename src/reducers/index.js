const computeTotalAmount = (state, amount) => {
  const totalAmount = state.totalAmount - amount;
  if (totalAmount >= 0) {
    return totalAmount;
  }
  return state.totalAmount;
};
export default (state, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return {
        ...state,
        totalAmount: computeTotalAmount(state, action.amount)
      };
    default:
      return state;
  }
};
