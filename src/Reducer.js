import { incrementAction, decrementAction } from "./Actions";

const init = {
  count: 30,
};

function Reducer(state = init, action) {
  switch (action.type) {
    case incrementAction:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrementAction:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default Reducer;
