const initState = {
  ShowSelection: false
};

const UIReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_SELECTION": {
      return { ...state, ShowSelection: !state.ShowSelection };
    }
    default:
      return state;
  }
};

export default UIReducer;
