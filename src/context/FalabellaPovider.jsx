import React, { createContext, useContext, useReducer } from "react";
import { FalabellaReducer, initialStore } from "./FalabellaReducer";

export const FalabellaContext = createContext();

const FalabellaPovider = ({ children }) => {
  const [store, dispatch] = useReducer(FalabellaReducer, initialStore);

  return (
    <FalabellaContext.Provider value={{ store, dispatch }}>
      {children}
    </FalabellaContext.Provider>
  );
};
export const useStore = () => useContext(FalabellaContext).store;
export const useDispatch = () => useContext(FalabellaContext).dispatch;

export default FalabellaPovider;
