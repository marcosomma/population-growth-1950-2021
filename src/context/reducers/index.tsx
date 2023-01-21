import example from "./example";
import loader from "./loader";
import { State } from "../providers/initialState";

type Action = {
  type: string;
  payload: any;
};

const combineReducers =
  (...reducers: any[]) =>
  (state: State, action: Action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

const reducers = combineReducers(
  example,
  loader,
);
export default reducers;
