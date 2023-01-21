import { State, DispatchArgs } from "../providers/initialState";
import example, { ExampleActions } from "./example";
import loader, { LoaderActions } from "./loader";
export interface ActionsCollections {
  example?: ExampleActions;
  loader?: LoaderActions;
}

const actionsCollection = (dispatch: React.Dispatch<DispatchArgs>, state: State, props: any) => {
  return {
    example: example(dispatch, state, props),
    loader: loader(dispatch, state, props),
  };
};

export default actionsCollection;
