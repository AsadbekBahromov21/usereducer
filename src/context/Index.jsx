import { useContext, createContext, useReducer } from "react";
const Context = createContext();
export const ContextProvider = ({ initialState, reducer, Children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {Children}
    </Context.Provider>
  );
};
export const useStateValue = () => useContext(Context);
