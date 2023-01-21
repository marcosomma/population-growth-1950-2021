import { ACTION_TEST, SHOW_TOGGLE, SET_COLOR } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";

const reducer = (state: State, action: DispatchArgs) => {
  let newState: State = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ACTION_TEST:
      newState.test++;
      return newState;
      case SHOW_TOGGLE:
        newState.show = !state.show;
      return newState;
      case SET_COLOR:
        newState.test_color = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
