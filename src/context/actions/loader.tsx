import { LOAD_JSON_START, LOAD_JSON_SUCCESS, LOAD_JSON_FAIL } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";
import { dispatchAndLogEvent } from "./_logger";
export interface LoaderActions {
  loadStart: GenericFunction;
  loadEnd: GenericFunction;
  loadFail: GenericFunction;
}
type GenericFunction = (params?: any) => void;

const actions = (dispatch: React.Dispatch<DispatchArgs>, state: State, props: any) => {
  const loadStart =(args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: LOAD_JSON_START,
      payload: { ...args },
    });
  };
  const loadEnd =(args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: LOAD_JSON_SUCCESS,
      payload: { ...args },
    });
  };
  const loadFail =(args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: LOAD_JSON_FAIL,
      payload: { ...args },
    });
  };

  return {
    loadStart,
    loadFail,
    loadEnd
  };
};

export default actions;
