import { createContext } from "react";

export type ContextProps = {
  loadingBackgroundColor: string;
  setLoadingBackgroundColor: (value: string) => void;
};

const AppContext = createContext<Partial<ContextProps>>({});

export default AppContext;
