import { createContext, useReducer } from "react";
import reducer, { initialState } from "./appreducer";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appState = {
    dispatch,
    state
  };
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};

export default AppProvider;

export { AppContext };
