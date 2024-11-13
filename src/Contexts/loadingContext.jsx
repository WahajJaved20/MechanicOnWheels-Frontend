import { createContext, useContext } from "react";

export const LoadingContext = createContext({
  isLoading: "false",
  startLoading: () => {},
  stopLoading: () => {}
});

export const LoadingProvider = LoadingContext.Provider;

export function useLoading(){
  return useContext(LoadingContext);
}
