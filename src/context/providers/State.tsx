import { createContext, useReducer } from "react";
import reducers from "../reducers";
import actions, { ActionsCollections } from "../actions";
import defaultState, {State} from "./initialState";
// import { logger } from "./../actions/_logger";
interface StateContextInterface {
  state: State;
  actionsCollection: ActionsCollections;
}

let initialState = defaultState;

export const StateContext = createContext<StateContextInterface>({state: initialState, actionsCollection: {}});
export const StateContextComponent = (props: any) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  const actionsCollection = actions(dispatch, state, props);

  return (
    <StateContext.Provider
      value={{
        actionsCollection,
        state,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContextComponent;
