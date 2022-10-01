import React, { createContext, useContext, useEffect, useReducer } from "react";
import { FalabellaReducer, initialStore } from "./FalabellaReducer";

export const FalabellaContext = createContext();

const FalabellaPovider = ({ children }) => {
  const [store, dispatch] = useReducer(FalabellaReducer, initialStore);

  useEffect(() => {
    console.log("FalabellaContext");
  });

  return (
    <FalabellaContext.Provider value={{ store, dispatch }}>
      {children}
    </FalabellaContext.Provider>
  );
};
export const useStore = () => useContext(FalabellaContext).store;
export const useDispatch = () => useContext(FalabellaContext).dispatch;

export default FalabellaPovider;
