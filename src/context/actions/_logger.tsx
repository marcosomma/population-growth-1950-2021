import { DispatchArgs } from "../providers/initialState";

export const dispatchAndLogEvent = (dispatch: React.Dispatch<DispatchArgs>, { type, payload }:DispatchArgs) => {
  if (process.env.REACT_APP_DISPATCH_LOGGED) console.log("DISPATCH", { type, payload });
  dispatch({ type, payload });
};

export const logger = (type: string, message: string) => {
  if (process.env.REACT_APP_DISPATCH_LOGGED) {
    switch (type) {
      case "error":
        console.error("_logger >", message);
        break;
      case "warn":
        console.warn("_logger >", message);
        break;
      default:
        console.log("_logger >", message);
        break;
    }
  }
};
