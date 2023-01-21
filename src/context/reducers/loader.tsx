import { LOAD_JSON_SUCCESS, LOAD_JSON_START, LOAD_JSON_FAIL } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";

const reducer = (state: State, action: DispatchArgs) => {
  let newState: State = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD_JSON_START:
      newState.loading = true;
      return newState;
      case LOAD_JSON_FAIL:
        newState.loading = false;
        return newState;
      case LOAD_JSON_SUCCESS:
        newState.loading = false;
        newState.jsonData = action.payload;
        return newState;
    default:
      return state;
  }
};

export default reducer;
