import { useReducer, useContext } from "react";
import AppContext, { ContextProps } from "./AppContext";

const initialState = {
  loadingBackgroundColor: "#2E6B71",
};

const reducer = (
  state: { loadingBackgroundColor: string },
  action: { type: string; value: string }
) => {
  switch (action.type) {
    case "set-loading-background-color":
      return { ...state, loadingBackgroundColor: action.value };
    default:
      throw new Error();
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoadingBackgroundColor = (value: string) => {
    dispatch({ type: "set-loading-background-color", value });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoadingBackgroundColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): Partial<ContextProps> => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useContext must be used within an AppProvider");
  }
  return context;
};

export { useAppContext };

export default AppProvider;
