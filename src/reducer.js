export const initialState = {
  countryClicked: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLICK_COUNTRY":
      return {
        ...state,
        countryClicked: action.countryClicked
      };

    default:
      return state;
  }
};

export default reducer;
