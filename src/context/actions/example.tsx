import { ACTION_TEST, SHOW_TOGGLE, SET_COLOR, SET_YEAR } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";
import { dispatchAndLogEvent } from "./_logger";
export interface ExampleActions {
  test: GenericFunction;
  showToggler: GenericFunction;
  setColor: GenericFunction;
  setYear: GenericFunction;
}
type GenericFunction = (params?: any) => void;

const actions = (dispatch: React.Dispatch<DispatchArgs>, state: State, props: any) => {
  const test = (args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: ACTION_TEST,
      payload: { ...args },
    });
  };
  const showToggler = () => {
    dispatchAndLogEvent(dispatch, {
      type: SHOW_TOGGLE,
      payload: null,
    });
  };
  const setColor = (color: string) => {
    dispatchAndLogEvent(dispatch, {
      type: SET_COLOR,
      payload: color,
    });
  };
  const setYear = (year: string) => {
    dispatchAndLogEvent(dispatch, {
      type: SET_YEAR,
      payload: year,
    });
  };

  return {
    test,
    showToggler,
    setColor,
    setYear
  };
};

export default actions;
