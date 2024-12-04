export const ColorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, colorCode: action.payload };
    default:
      return state;
  }
};
