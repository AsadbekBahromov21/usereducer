export const inittialState = {
  son: 0,
  WishList: [],
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + 1 };
    default:
      return state;
  }
};
